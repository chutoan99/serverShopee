const nodemailer = require("nodemailer");
const emailController = {
  sendEmail: async (req, res) => {
    const { email } = req.body;
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.PASS_EMAIL,
        },
      });
      await transporter.sendMail(
        {
          from: process.env.USER_EMAIL,
          to: `${email}`,
          subject: "Hello ✔",
          text: "Hello world?",
          html: "<b>Hello world?</b>",
        },
        (err) => {
          if (err) {
            return res.json({ mes: err });
          } else {
            return res.json({ mes: "gửi thành công" });
          }
        }
      );
    } catch (err) {
      res.json("lỗi server");
    }
  },
};

module.exports = emailController;
