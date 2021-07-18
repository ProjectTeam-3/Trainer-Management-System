const express = require("express");
app = new express();
const cors = require('cors');
const userdata = require('./src/model/userdata');
const user = require("../../mean-Assignment-master/backend/model/user");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

adminemail='admin@gmail.com';
password='admin@123';

app.post('/signup', function (req, res) {
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  trainer = req.body.trainer;
  console.log(trainer.traineremail);
  var newuser = {
    useremail:trainer.traineremail,
    username: trainer.trainerusername,
    password: trainer.trainerpass,
    role: "normaluser"
  };
  userdata.findOne({ useremail: trainer.traineremail.trim() } || { password: trainer.trainerpass.trim() })
    .then(function (data) {
      if (data === null) {
        var user = userdata(newuser);
        user.save();
        res.status(200).send();
      }
      else {
        res.status(401).send("Invalid User name or password");
      }
      console.log(newuser);
    });
});
app.post('/signin', function (req, res) {
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  res.status(200);
  trainer = req.body.trainer;
  console.log(trainer);
  userdata.findOne({ "useremail": trainer.traineremail })
    .then(function (data) {
      if (data.password === trainer.traineremail) {
        // var payload = { subject: data.role }
        // var token = jwt.sign(payload, 'aspkey');
        // res.status(200).send({ token });
        // res.status(200);
      }
      else {
        message='failed'
        res.status(200).send({ message });
      }
    })
  .catch((err) => {
    message = 'failed'
    res.status(200).send({ message });
  })
});
// app.post('/admin', function (req, res) {
//   res.header("Access-Control-Allow-Orgin", "*");
//   res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
//   // res.status(200);
//   user = req.body.admin;
//   console.log(user);
//   userdata.findOne({ "useremail": user.adminemail })
//     .then(function (data) {
//       if (data.password === user.adminemail) {
//         // var payload = { subject: data.role }
//         // var token = jwt.sign(payload, 'aspkey');
//         // res.status(200).send({ token });
//         res.status(200);
//       }
//       else {
//         message='failed'
//         res.status(200).send({ message });
//       }
//     })
//   .catch((err) => {
//     message = 'failed'
//     res.status(200).send({ message });
//   })
// });

app.post('/admin', function (req, res) {
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    res.status(200);
    admin = req.body.admin;
    console.log(admin);
    if(adminemail == admin.adminemail && password == admin.adminpass){
        // res.status(200);
       }
    else{
      message = 'failed'
      res.status(200).send({ message });
    }
});
app.listen(3000, function () {
  console.log("listening to port number: 3000");
});