import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  // trainer={
  //   traineremail:'',
  //   trainerusername:'',
  //   trainerpass:'',
  //   photo:'',
  //   course:'',
  //   desig:'',
  //   currentcmpny:'',
  //   skillset:'',
  //   highqualification:'',
  //   trainerAddress:'',
  //   trainerPhone:''
  // }
  constructor(public trainerservice:TrainerService,private router:Router,public _auth:AuthService) { }
email=localStorage.getItem('email');
  ngOnInit(): void {
    
    this.trainerservice.checkApproved(this.email);
  }
// courses=[
//   "CERTIFIED XR ASSOCIATE","CERTIFIED CYBER SECURITY ANALYST","CERTIFIED SPECIALIST IN FULL STACK DEVELOPMENT",
//   "CERTIFIED SPECIALIST INs DATA SCIENCE & ANALYTICS","MICRO SKILLS TRAINING ON ROBOTIC PROCESS AUTOMATION",
//   "MICRO SKILLS TRAINING ON DIGITAL MARKETING AND SEO","CERTIFIED SPECIALIST IN MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE",
//   "MOODLE","ARM EMBEDDED SYSTEMS","IOT FOR ENGINEERING APPLICATIONS","AWS EDUCATE"
// ]
// fname="";
// lname="";
// address="";
// email="";
// phno="";
// qual="";
// skill="";
// comp="";
// desgn="";
// course="";
// img:any;
// url:any="./assets/trainer.jpg"
// onFileSelected(event:any){
//   if(event.target.files){
//     var reader=new FileReader();
//     reader.readAsDataURL(event.target.files[0]);
//     reader.onload=(e:any)=>{
//       this.url=e.target.result;
//     }
//     this.img=event.target.files[0];
//   }
  
// }

// addRequest(){
//   // var item={fname:this.fname,
//   // lname:this.lname,
//   // address:this.address,
//   // email:this.email,
//   // phno:this.phno,
//   // qual:this.qual,
//   // skil:this.skill,
//   // comp:this.comp,
//   // desgn:this.desgn,
//   // course:this.course,
//   // img:this.img
//   // }
//   var formdata=new FormData();
//   formdata.append("img",this.img);
//   formdata.append("fname",this.fname);
//   formdata.append("lname",this.lname);
//   formdata.append("address",this.address);
//   formdata.append("email",this.email);
//   formdata.append("phno",this.phno);
//   formdata.append("qual",this.qual);
//   formdata.append("skill",this.skill);
//   formdata.append("comp",this.comp);
//   formdata.append("desgn",this.desgn);
//   formdata.append("course",this.course)
  
//   this.trainerservice.addRequest(formdata);
//   console.log(this.img);
  
//   this.router.navigate(['/success'])
// }
logOut(){
  // localStorage.removeItem('approved');
  // localStorage.removeItem('email');
  // localStorage.removeItem('token');
  localStorage.clear();
}
logoutUser()
  {
  localStorage.removeItem('token')
  this.router.navigate(['/login'])
  localStorage.clear();
  sessionStorage.clear();
  }


}
