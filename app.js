const express = require("express");
const productRoute = require("./api/routes/productRoute");
// const ordertRoute = require("./api/routes/orderRoute");
const app = express();

app.use("/products" ,productRoute);
// app.use("/orders" ,orderRoute);

module.exports = app;



