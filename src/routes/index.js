const { notFound } = require("../middleWares/handle_errors");
const insertRoute = require("./insert.route");
const overviewRoute = require("./overview.route");
const postRoute = require("./post.route");
const commentRoute = require("./comment.route");
const shopRoute = require("./shop.route");
const cartRoute = require("./cart.route");
const orderRoute = require("./order.route");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const bannerRoute = require("./banner.route");
const categoryTreeRoute = require("./categoryTree.route");
const industryRoute = require("./industry.route");

const initRoutes = (app) => {
  app.use("/auth", authRoute);

  app.use("/insert", insertRoute);

  app.use("/overview", overviewRoute);

  app.use("/post", postRoute);

  app.use("/comment", commentRoute);

  app.use("/shop", shopRoute);

  app.use("/cart", cartRoute);

  app.use("/order", orderRoute);

  app.use("/user", userRoute);

  app.use("/banner", bannerRoute);

  app.use("/categoryTree", categoryTreeRoute);

  app.use("/industry", industryRoute);

  // nếu không lọt vào các routes trên thì sẽ lọt vào routes này
  app.use(notFound);
};

module.exports = initRoutes;
