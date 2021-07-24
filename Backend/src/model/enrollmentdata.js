const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost:27017/tms');
mongoose.connect('mongodb+srv://team3:team3@cluster0.6iuwn.mongodb.net/TrainerManagement?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const EnrollmentSchema = new Schema({
  fname:String,
  lname: String,
  address: String,
  email: String,
  phno: String,
  qual:String,
  skill: String,
  comp: String,
  desgn: String,
  course: String,
  img: String
});
var enrollmentdata = mongoose.model('enrollmentdata', EnrollmentSchema);
module.exports = enrollmentdata;