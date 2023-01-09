const configSocket = (server) => {
  const io = require("socket.io")(server, {
    cors: { origin: "*" },
  });
  io.on("connection", (socket) => {
    console.log("Có người kết nối: " + socket.id);
    // lắng nghe sự kiện data client truyền lên server
    socket.on("message", (message) => {
      console.log(message);
      // io.emit("message", `${socket.id.substr(0, 2)}: ${message}`);
    });
    socket.on("disconnect", () => {
      console.log(socket.id + "ngắt kết nối");
    });
    socket.on("join", (data) => {
      socket.join(data.room);
      socket.broadcast.to(data.room).emit("user joined"),
        { user: data.user, message: "has joined this room" };
    });

    socket.on("chat", (data) => {
      io.in(data.room).emit("new message", {
        user: data.user,
        message: data.message,
      });
    });
  });
};

module.exports = configSocket;
// , {
//   cors: { origin: ["http://localhost:4200"] },
// }
