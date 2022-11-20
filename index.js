const express = require("express");
const cors = require("cors");
const connectDb = require("./src/models/connectDb");
const initRoutes = require("./src/routes/index");
// const datas = require("./data/data");
// datas.items.map((item) => {
//   item?.categories?.map((item, index) =>
//     console.log("vòng:", index,item?.display_name)
//   );
// }),
require("dotenv").config();

const app = express();
app.use(express());
app.use(cors());
app.use(express.json());
connectDb();
initRoutes(app);
// trang home
app.get("/", (req, res) => {
  res.send("hello");
});
// trang home
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
