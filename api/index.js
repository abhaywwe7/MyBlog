const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("mongodb connected"))
  .catch((err) => console.log(err));

// app.use("/", (req, res) => {
//   console.log("hey this is running");
// });
app.listen("5000", () => {
  console.log("Backend is successfully running!");
});
