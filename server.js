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

app.get("/song/", function(req, res){
  const song = {
    id: req.query.id
  }
  pool.query(
    `SELECT * 
    FROM Songs LEFT JOIN Compositors on Songs.comp_id = Compositors.id
    WHERE Songs.id = '${song.id}'`,song, function(err, data) {
    if(err) {
      return console.log(err);
    }
    res.json(data);
    //console.log(data);
  });
  
});

app.get("/allSongs", function(req, res){
  pool.query("SELECT * FROM Songs LEFT JOIN Compositors on Songs.comp_id = Compositors.id", function(err, data) {
    if(err) {
      return console.log(err);
    }
    res.json(data);
    //console.log(data);
  });
});


app.listen(port);

console.log(`App is listening on ${port}`);