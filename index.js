const connectDb = require("./src/config/connectDb");
const configSocket = require("./src/config/socketio");
const initRoutes = require("./src/routes/index");
const connectMongodb = require("./src/config/connectMongo");
const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app);

configSocket(server);
app.use(express());
app.use(cors());
app.use(express.json());
connectDb();
connectMongodb();
// routes
initRoutes(app);
// trang home
app.get("/", (req, res) => {
  res.send("hello");
});

// trang home
require("dotenv").config();
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
function generateRandomNumber() {
  return ("000000" + Math.floor(Math.random() * 1000000)).slice(-6);
}

console.log(generateRandomNumber());
