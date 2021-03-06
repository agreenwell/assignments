var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8000;
var morgan = require("morgan");
var mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/car", require("./routes/carRoutes"));
app.use("/person", require("./routes/personRoutes"));

mongoose.connect("mongodb://localhost/cars", function (err) {
    if (err) throw err;
    console.log("Connected to the database");
});

app.listen(port, function () {
    console.log("Server is running on port " + port);
});
