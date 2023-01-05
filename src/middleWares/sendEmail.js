const nodemailer = require("nodemailer");

const sendEmail = (req, res, next) => {
  const { email } = req.body;
  console.log(email);
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASS_EMAIL,
    },
  });
  var code = 12345612345;
  transporter.sendMail(
    {
      from: process.env.USER_EMAIL,
      to: `${email}`,
      subject: "Update password", // tieu de
      html: `<b>Mật khậu mới của bạn là: ${code}</b>`,
    },
    (err) => {
      if (err) {
        return res.json({ mes: err });
      } else {
        req.pass = pass;
        return res.json({ mes: "gửi thành công" });
      }
    }
  );
  req.code = code;
  next();
};
module.exports = sendEmail;
