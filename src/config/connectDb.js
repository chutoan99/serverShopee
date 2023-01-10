const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("railway", "root", "w2SGfCx46bPDRClVaO0w", {
  host: "containers-us-west-199.railway.app",
  dialect: "mysql",
  port: 7753,
  logging: false,
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
