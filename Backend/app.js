const express = require("express");
app = new express();
const cors = require('cors');
const userdata = require('./src/model/userdata');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/signup', function (req, res) {
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  user = req.body.trainer;
  console.log(user.traineremail);
  var newuser = {
    username: user.traineremail,
    password: user.trainerpass,
    role: "normaluser"
  };
  userdata.findOne({ username: user.traineremail.trim() } || { password: user.trainerpass.trim() })
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
  user = req.body.trainer;
  console.log(user);
  userdata.findOne({ "username": user.traineremail })
    .then(function (data) {
      if (data.password === user.traineremail) {
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
app.post('/admin', function (req, res) {
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  // res.status(200);
  user = req.body.trainer;
  console.log(user);
  userdata.findOne({ "username": user.traineremail })
    .then(function (data) {
      if (data.password === user.traineremail) {
        // var payload = { subject: data.role }
        // var token = jwt.sign(payload, 'aspkey');
        // res.status(200).send({ token });
        res.status(200);
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
app.listen(3000, function () {
  console.log("listening to port number: 3000");
});