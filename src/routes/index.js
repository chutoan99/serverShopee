const authRouter = require("./auth");
const dataRouter = require("./data");
const categoryRouter = require("./categories");
const shopRouter = require("./shop");
const searchRouter = require("./search");
const insertRouter = require("./insert");

const initRoutes = (app) => {
  app.use("/auth", authRouter);
  app.use("/data", insertRouter);
  app.use("/api", dataRouter);
  app.use("/category", categoryRouter);
  app.use("/shop", shopRouter);
  app.use("/search", searchRouter);
  // nếu không lọt vào các routes trên thì sẽ lọt vào routes này
  return app.use("/", (req, res) => {
    res.send("server on...");
  });
};

module.exports = initRoutes;
