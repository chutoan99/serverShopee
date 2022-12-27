const joi = require("joi");

const email = joi.string().pattern(new RegExp("gmail.com$")).required();
const password = joi
  .string()
  .min(6)
  .required()
  .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"));
const image = joi.string().required();
const name = joi.string().required();
const price = joi.number().required();
module.exports = { email, password, image, name, price };
