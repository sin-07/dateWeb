const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const connectDb = require("./db/connection");
const router = require("./routes/routes");

connectDb();

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api", router);

io.on("connection", (socket) => {
  console.log(socket.id, "connected");
  socket.emit("welcome", `Welcome to the server ${socket.id}`);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
