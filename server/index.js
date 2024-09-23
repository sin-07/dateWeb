const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");


const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(socket.id, "connected");
  socket.emit("welcome", `Welcome to the server ${socket.id}`);
});

app.use(cors());
app.use(express.json());

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
