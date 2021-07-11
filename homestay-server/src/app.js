var express = require("express");
var cors = require("cors");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
import generalErrorHandler from "./middlewares/generalErrorHandler";

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/userFeature");
var homestayRouter = require("./routes/homestay");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use("/userFeature", usersRouter);
app.use("/homestay", homestayRouter);
app.use(function (req, res) {
  res.status(404).json({ error: "Page not found" });
});
app.use(generalErrorHandler);
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Internal Server Error!");
});
module.exports = app;
