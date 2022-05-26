const express = require("express");
const productRoute = require("./api/routes/productRoute");
const morgan = require("morgan")
// const ordertRoute = require("./api/routes/orderRoute");
const app = express();

app.use(morgan("dev"));
app.use("/products" ,productRoute);
// app.use("/orders" ,orderRoute);

module.exports = app;



