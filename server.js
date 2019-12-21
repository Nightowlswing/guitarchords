var express = require('express');
var app = express();
const port = process.env.PORT || 3210;
const cors = require('cors');

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

const mysql = require('mysql2');
const pool = mysql.createPool({
  host: "zanner.org.ua",
  port: "33321",
  user: "ka7508",
  password: "123456",
  database: "ka7508"
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/profile", function(req, res){
  pool.query("SELECT text FROM Songs", function(err, data) {
    if(err) {
      return console.log(err);
    }
    res.json(data);
    //console.log(data);
  });
});

app.listen(port);

console.log(`App is listening on ${port}`);