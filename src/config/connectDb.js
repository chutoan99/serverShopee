const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("shopee", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  port: "3305",
});

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection mysql database successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = connectDb;