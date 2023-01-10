const connectDb = require("./src/config/connectDb");
const initRoutes = require("./src/routes/index");
const connectMongodb = require("./src/config/connectMongo");
const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: { origin: ["http://localhost:4200"] },
});

io.on("connection", (socket) => {
  console.log("Có người kết nối: " + socket.id);

  socket.on("message", (message) => {
    console.log(message);
    // io.emit("message", `${socket.id.substr(0, 2)}: ${message}`);
  });
  socket.on("disconnect", () => {
    console.log(socket.id + "ngắt kết nối");
  });
});
app.use(express());
app.use(cors());
app.use(express.json());
connectDb();
connectMongodb();
// routes
initRoutes(app);
// trang home
app.use("/home", (req, res) => {
  res.send("hello kết nối thành công");
});
// trang home
require("dotenv").config();
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => console.log(`Server running on port ${PORT}`));
