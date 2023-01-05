const joi = require("joi");
const { email, password } = require("../helpers/validate");
const { RegisterServices, LoginServices } = require("../services/auth.service");
const { internalServerError } = require("../middleWares/handle_errors");
const { badRequest } = require("../middleWares/handle_errors");

const RegisterController = async (req, res, next) => {
  try {
    // chua cac bien can validate
    const { error } = joi.object({ email, password }).validate({
      email: req.body.email,
      password: req.body.password,
    });
    if (error) return badRequest(error.details[0]?.message, res);
    const payload = req.body;
    const response = await RegisterServices(payload);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(200).json({
        err: 1,
        mess: "missing input",
      });
    }
    const response = await LoginServices(email, password);
    return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};
const forgotPasswordController = async (req, res) => {
  try {
    console.log(req.code, "passsssssssssssssssssssssss");
    const code = req.code;
    const { code2 } = req.body;
    // if (!email || !password) {
    //   return res.status(200).json({
    //     err: 1,
    //     mess: "missing input",
    //   });
    // }
    // const response = await LoginServices(email, password);
    // return res.status(200).json(response);
  } catch (error) {
    return internalServerError(res);
  }
};

module.exports = {
  RegisterController,
  LoginController,
  forgotPasswordController,
};
