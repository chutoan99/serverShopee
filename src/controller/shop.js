const datas = require("../../data/data");
const datasShop = require("../../data/product_shop");

const shopController = {
  // lấy thông tin shop
  getInfoShop: async (req, res) => {
    try {
      const item = datasShop.items.filter(
        (value) => value.data.shopid == req.params.shopid
      );
      res.json(item[0].data);
    } catch (err) {
      res.json("lỗi server");
    }
  },
  // lấy tất cả sản phẩm của shop
  getAllItemShop: async (req, res) => {
    try {
      const item = datas.items.filter(
        (value) => value.shopid == req.params.shopid
      );
      res.json(item);
    } catch (err) {
      res.json("lỗi server");
    }
  },
};

module.exports = shopController;
