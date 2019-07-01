var express = require("express");
var app = express();
var multer = require("multer");
var cors = require("cors");
var fs = require('fs');
var csv = require('fast-csv');
//const csv = require("csv-parser");

app.use(cors());

var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function(req, file, callback) {
    console.log(file);
    callback(null, file.originalname);
  }
});

var upload = multer({ storage: storage }).single("file");

app.post("/upload", function(req, res) {
  upload(req, res, function(err) {
    if (err) {
      return res.end("Error uploading");
    }
    res.end("File Uploaded");
  });
});

var dataArr = [];

app.get("/getData", function(req,res) {
  csv.fromPath("./uploads/data.csv", { headers: true})
  .on("data", data => {
    dataArr.push(data);
  })
  .on("end", () => {
    res.json(dataArr);
  })
});






app.listen(4000, function() {
  console.log("App running on Port 4000");
});
