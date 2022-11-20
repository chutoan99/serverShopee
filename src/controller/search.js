const datas = require("../../data/data");

const searchController = {
  getSearch: async (req, res) => {
    try {
      const item = datas.items.filter((value) => {
        // Regular Expression
        let re = new RegExp(req.query.search, "i");
        // Tìm Categories
        let array = value.categories.filter((v) => {
          return v.display_name.search(re) != -1;
        });
        // Tìm theo tên
        let checkName = value.name.search(re) != -1;
        return array.length > 0 || checkName;
      });
      res.status(200).json(item);
    } catch (err) {
      res.json("lỗi server");
    }
  },
};

module.exports = searchController;
