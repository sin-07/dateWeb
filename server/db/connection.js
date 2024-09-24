const mongoose = require("mongoose");


const connectDb = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  if (connection.STATES.connected) {
    console.log("Database connected");
  } else if (connection.STATES.connecting) {
    console.log("Database connecting");
  } else if (connection.STATES.disconnected) {
    console.log("Database disconnected");
  }

};


module.exports = connectDb;