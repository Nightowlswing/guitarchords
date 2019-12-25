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
  pool.query("SELECT Songs.id, Songs.name, Songs.comp_id, Songs.genre, Songs.text, Songs.capo, Compositors.cname FROM Songs LEFT JOIN Compositors on Songs.comp_id = Compositors.id", function(err, data) {
    if(err) {
      return console.log(err);
    }
    res.json(data);
    //console.log(data);
  });
});

app.get("/login/", function(req, res){
  const user = {
    email: req.query.email,
    password: req.query.password
  }
  
  pool.query(
    `SELECT *
    FROM Users  
    WHERE (email = '${user.email}' AND
    password = '${user.password}')`, user,
    function(err, data) {
    if(err) {
      return console.log('it is err', err);
    }
    res.json(data);

  });
});

app.get("/singup/", function(req, res){
  const user = {
    email: req.query.email,
    password: req.query.password,
    nickname: req.query.nickname
  }
  
  pool.query(
    `
      SELECT COUNT(*) as N FROM Users WHERE( Users.email = '${user.email}');
    `, user,
    function(err, data) {
    if(err) {
      return console.log('it is err', err);
    }
    if(data[0].N === 0){
      pool.query(
        `
          INSERT INTO Users(email,nickname,password, userSongs) VALUES('${user.email}','${user.nickname}','${user.password}',"[]");
        `,function(err, data) {
          if(err) {
            return console.log('it is err', err);
          }
          res.json(data);
      
        }
      );
    }
    else{
      res.json(data);
    }
  });

});

app.get("/addsong/", function(req, res){
  var song = {
    cname: req.query.cname,
    sname: req.query.sname,
    capo: req.query.capo,
    genre: req.query.genre,
    text: req.query.text
  }
  console.log(req.query.cname);
  pool.query(
    `SELECT COUNT(*) AS N
    FROM Compositors 
    WHERE cname = '${song.cname}'`, song,
    function(err, data) {
      if(err) {
        return console.log('it is err0', err);
      }
      if(data[0].N === 0){
        pool.query(
          `
          INSERT INTO Compositors(cname) VALUES('${song.cname}');
          `,song,function(err, data) {
            if(err) {
              return console.log('it is err1', err);
            }
            pool.query(
              `
                SELECT id as cid FROM Compositors WHERE cname = '${song.cname}'
              `,song,function(err, data) {
                if(err) {
                  return console.log('it is err2', err);
                }
                song.cname = data[0].cid;
                pool.query(
                  `
                    INSERT INTO Songs(capo,comp_id,genre,name,text) VALUES('${song.capo}','${song.cname}','${song.genre}','${song.sname}','${song.text}')
                  `, song,
                  function(err, data) {
                  if(err) {
                    return console.log('it is err', err);
                  }
                  
                  res.json(data);
              
                }                    
                );
              }
            );
            }
        );
      }
      else{
        pool.query(
          `
            SELECT COUNT(*) AS M FROM Songs WHERE name = '${song.sname}'
          `, song,
          function(err, data) {
            if(err) {
              return console.log('it is err', err);
            }
            if(data[0].M===0){
              pool.query(
                `
                  SELECT id as cid FROM Compositors WHERE cname = '${song.cname}'
                `,song,
                function(err, data) {
                if(err) {
                  return console.log('it is err', err);
                }
                res.json(data);
                pool.query(
                  `
                    INSERT INTO Songs(capo,comp_id,genre,name,text) VALUES('${song.capo}','${song.cname}','${song.genre}','${song.sname}','${song.text}')
                  `, song,
                  function(err, data) {
                  if(err) {
                    return console.log('it is err', err);
                  }
                    song.cname = data[0].cid;
                  
                  res.json(data);
              
                }                    
                );
              });

            }
            
          res.json(data);
      
        });
      }
    }
  );
});


app.listen(port);

console.log(`App is listening on ${port}`);