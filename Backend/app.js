const express = require("express");
app = new express();
const cors = require('cors');
const userdata = require('./src/model/userdata');
const jwt = require('jsonwebtoken')
const enrollmentdata=require('./src/model/enrollmentdata');
const multer=require('multer');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

adminemail='admin@gmail.com';
password='admin@123';
var storage=multer.diskStorage({
  destination:function(req,res,cb){
   cb(null,'./public/images/requests')
  },
filename:function(req,file,cb){
  cb(null,file.originalname)
}});
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
      if (data.password === trainer.trainerpass) {
        console.log(data.role);
        console.log("successful login");

        var payload = { subject: data.role }
        var token = jwt.sign(payload, 'aspkey');
        res.status(200).send({ token });
        // res.status(200);
      }
      else {
      res.status(401).send('Invalid login')
       
      }
    })
  .catch((err) => {
    message = 'failed'
    res.status(401).send({ message });
  })
});


app.post('/admin', function (req, res) {
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    // res.status(200);
    admin = req.body.admin;
    console.log(admin);
    if(!(adminemail === admin.adminemail && password === admin.adminpass)){
        res.status(401).send('Invalid Login')
     
       }
    
     else {
       console.log("successful login");
      // res.status(200);

      let payload = {subject: adminemail+password}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})
    }
});
app.post('/request',(req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  console.log(req.body);
  var upload=multer({storage: storage}).single('img');
  upload(req,res,(err)=>{
    
    if(err){
      console.log(err);
     }
     else{
       if(req.file){
      var item={
        fname:req.body.fname,
        lname: req.body.lname,
        address:req.body.address,
        email: req.body.email,
        phno: req.body.phno,
        qual:req.body.qual,
        skill: req.body.skill,
        comp: req.body.comp,
        desgn: req.body.desgn,
        course: req.body.course,
        img:req.file.filename
      }
    }
    else{
      console.log("error")
    }
       var enrollment=new enrollmentdata(item);
       enrollment.save();
     }
  })
})


app.listen(3000, function () {
  console.log("listening to port number: 3000");
});