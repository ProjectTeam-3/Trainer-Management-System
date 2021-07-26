const express = require("express");
app = new express();
const cors = require('cors');
const userdata = require('./src/model/userdata');
const jwt = require('jsonwebtoken');
const nodemailer=require('nodemailer');
const enrollmentdata=require('./src/model/enrollmentdata');
const trainerdata=require('./src/model/trainerdata');
const multer=require('multer');
const { request } = require("http");
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
      console.log("error in saving the image")
    }
       var enrollment=new enrollmentdata(item);
       enrollment.save();
     }
  })
})
app.get('/requestlist', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTION");
  enrollmentdata.find()
    .then(function (requests) {
      res.send(requests);  
    }); 
});
app.delete('/reject/:id',(req,res)=>{
   
  id = req.params.id;
  enrollmentdata.findByIdAndDelete({"_id":id})
  .then(()=>{
      console.log('rejected a trainer request')
      res.send();
  })
})
app.get('/approverequest/:id',  (req, res) => {
  
  const id = req.params.id;
  enrollmentdata.findOne({"_id":id})
    .then((request)=>{
      console.log('approve request '+request)
        res.send(request);
    });
})


app.post('/approvedtrainer',async function (req, res) {
   
  console.log(req.body);
    var fname=req.body.fname;
    var typeemp=req.body.typeemp;
    var id=fname.toUpperCase() + '_'+typeemp.toUpperCase();
  var approvedlist = {
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
    img: req.body.img,
    typeemp:req.body.typeemp,
    id:id
  }
  
  
  console.log('approvedlist '+ approvedlist)
  var approvedlist =new trainerdata(approvedlist);
  approvedlist.save();
  const traineremail=await enrollmentdata.findOne({email:approvedlist.email})
  
  var transport=nodemailer.createTransport(
    {
      service:'gmail',
      auth:{
        user:'ictakproject@gmail.com',
        pass:'admin4ictak!'
      }
    }
  )
  
  var mailOptions={
    
    from:'ictakproject@gmail.com',
    to:approvedlist.email,
    subject:'You are Approved',
    text:`Congratulations ${approvedlist.fname}  ${approvedlist.lname}.You are approved as ${approvedlist.typeemp}  Trainer and your ID is ${approvedlist.id}.`
  }
  transport.sendMail(mailOptions,function(error,info){
    if(error){
      console.log(error+" error insenting email")
    }
    else{
      console.log("email sent "+info.response)
    }
  })
  enrollmentdata.findOneAndDelete({"_id":traineremail._id})
  .then(()=>{
      console.log('successfully deleted from enrollment list')
      res.send();
  })
});
app.get('/getTrainers',(req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  trainerdata.find().then((trainers)=>{
    res.send(trainers);
  })  
})
app.get('/search/:name',(req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  console.log(req.params);
  var regex=new RegExp(req.params.name,'i');
  trainerdata.find({$or:[{fname:regex},{lname:regex}]}).then((data)=>{
    res.send(data);
  })
   
})
app.get('/search/course/:course',(req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  console.log(req.params);
  var regex=new RegExp(req.params.course,'i');
  trainerdata.find({course:regex}).then((data)=>{
    res.send(data);
  })
   
})
app.get('/search/skill/:skill',(req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  console.log(req.params);

  var regex=new RegExp(req.params.skill,'i');
  trainerdata.find({skill:regex}).then((data)=>{
    res.send(data);
  })
   
})
app.get('/search/type/:typeemp',(req,res)=>{
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  console.log(req.params);
  var regex=new RegExp(req.params.typeemp,'i');
  trainerdata.find({typeemp:regex}).then((data)=>{
    res.send(data);
  })
   
})



app.listen(3000, function () {
  console.log("listening to port number: 3000");
});