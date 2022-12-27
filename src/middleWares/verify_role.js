const { notAuth } = require("./handle_errors");

// cac role la shop_Admin thi next
const isShopAdmin = (req, res, next) => {
  const { role } = req.user;
  if (role !== "shop_Admin") return notAuth("Require role shop_Admin", res);
  next();
};

module.exports = isShopAdmin;
