var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const orderRoutes = require("./routes/order");

var app = express();
app.use(express.json());

const db = require("./models");

db.sequelize.sync().then(() => {
  console.log("Database synced");
});


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

module.exports = app;
