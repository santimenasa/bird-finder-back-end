const express = require("express");
const colors = require("colors");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;


connectDB()

//middlewares

//config DB and server

  app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`.green)
})  
