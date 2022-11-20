const datas = require("../../data/data");

const categoryController = {
  // Get AlL Categories
  getAllCategories: async (req, res) => {
    try {
      const item = datas.items.filter((value) => {
        let array = value.categories.filter((v) => {
          return v.display_name == req.params.category_name;
        });
        return array.length > 0;
      });
      res.status(200).json(item);
    } catch (err) {
      res.json("lỗi server");
    }
  },
};

module.exports = categoryController;
