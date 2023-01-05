const db = require("../models/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const RegisterServices = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      var hashPassWord = bcrypt.hashSync(
        payload.password,
        bcrypt.genSaltSync(10)
      );
      const sex = payload.sex;
      const img_men =
        "https://imgs.search.brave.com/NMbKJRcDath4I02VHl0t8tYf4UJSAmftuegWj3ZCbYs/rs:fit:640:403:1/g:ce/aHR0cDovL3d3dy5i/aXRyZWJlbHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDEx/LzA0L0ZhY2Vib29r/LU5ldy1EZWZhdWx0/LUF2YXRhci1QaWN0/dXJlLTcuanBn";
      const img_women =
        "https://imgs.search.brave.com/GgQ8DyHg0f1QxTAoZOmh4fYbylAOXHK903G1j_P_EaE/rs:fit:640:403:1/g:ce/aHR0cDovL3d3dy5i/aXRyZWJlbHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDEx/LzA0L0ZhY2Vib29r/LU5ldy1EZWZhdWx0/LUF2YXRhci1QaWN0/dXJlLTQuanBn";
      const response = await db.User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          userid: payload.userid,
          name: payload.name,
          email: payload.email,
          sex: sex,
          role: "user",
          avatar: sex === 0 ? img_men : img_women,
          address: payload.address,
          phone: payload.phone,
          birthday: payload.birthday,
          password: hashPassWord,
        },
      });

      // check tạo thành công thì trả về token

      const token = response
        ? jwt.sign(
            {
              userid: response.userid,
              email: response.email,
              role: response.role,
            },
            process.env.SECRET_KEY,
            { expiresIn: "1d" }
          )
        : null;
      resolve({
        err: response[1] ? 0 : 1,
        msg: response[1] ? "register is SuccessFully" : "email is used",
        response,
        token,
      });
    } catch (error) {
      reject(error);
    }
  });

const LoginServices = (email, password) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: {
          email: email,
        },
        raw: true,
      });

      // nếu có response trả về thì kiểm trả password
      const isChecked =
        response && bcrypt.compareSync(password, response.password);
      // nếu kiểm tra thành công thì tạo token
      const token = isChecked
        ? jwt.sign(
            {
              userid: response.userId,
              email: response.email,
              role: response.role,
            },
            process.env.SECRET_KEY,
            { expiresIn: "1d" }
          )
        : null;
      resolve({
        err: token ? 0 : 1,
        // nếu có token thì đang nhap thanh cong , nếu k thi kiểm tra lạ isChecked
        msg: token
          ? "Login Success"
          : response
          ? "Password s wrong"
          : "Email has been register",
        response: token ? response : null,
        access_token: token,
      });
    } catch (error) {
      reject(error);
    }
  });

module.exports = { RegisterServices, LoginServices };
