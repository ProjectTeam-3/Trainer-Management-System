import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainerallocation',
  templateUrl: './trainerallocation.component.html',
  styleUrls: ['./trainerallocation.component.css']
})
export class TrainerallocationComponent implements OnInit {
  trainer={
    fname:'',
  lname: '',
  address: '',
  email: '',
  phno: '',
  qual:'',
  skill: '',
  comp: '',
  desgn: '',
  course: '',
  img: '',
  typeemp:'',
  startdate :'',
  enddate:'',
  time:'',
  courseid:'',
  batchid:'',
  meetinglink:''
  }
  courseids=[
    "C_XR_A","CCSA","CSFSD",
    "CSDSA","MSTRPA",
    "MSTDMS","CSMLAI",
    "MOODLE","ARM_E_S ","IOTEA","AWSEDU"
  ]
  tname:any;
  allocateddetails:any=[];
  constructor(private trainerlistService:AdminService,private router:Router) { }
  
  ngOnInit(): void {
    let  trainerId = localStorage.getItem("gettrainerId");
    this.trainerlistService.getTrainer(trainerId).subscribe((data:any) =>{
      this.trainer = JSON.parse(JSON.stringify(data));
      localStorage.setItem('trainermail',this.trainer.email);
      console.log(this.trainer)
      this.tname=this.trainer.fname +' '+this.trainer.lname;
    })
    var email=localStorage.getItem('trainermail')
  this.trainerlistService.checkDates(email).subscribe((data)=>{
    this.allocateddetails=JSON.parse(JSON.stringify(data));
    console.log(this.allocateddetails)
    var len=this.allocateddetails.length;
    for(let i=0;i<len;i++){
      var startdate=this.allocateddetails[i].startdate;
      var enddate=this.allocateddetails[i].enddate;
      this.dates.push({'startdate':startdate,'enddate':enddate})
    }
     
  })
   
  }
  schedule(){
    console.log(this.trainer);
    this.trainerlistService.schedule(this.trainer);
    this.router.navigate(['/admin/dashboard']);

  }
  myHolidayDates = [
    new Date("12/12/2020"),
    new Date("12/20/2020"),
    new Date("12/17/2020"),
    new Date("12/25/2020"),
    new Date("12/4/2020"),
    new Date("12/7/2020"),
    new Date("12/12/2020"),
    new Date("12/11/2020"),
    new Date("12/26/2020"),
    new Date("12/25/2020")
];

test(){
  return (this.dates);
}


dates:any=[];



validate(){
 
  console.log(this.dates);
     var dt = new Date(this.trainer.startdate);
     var dte=new Date(this.trainer.enddate);
     if(this.trainer.startdate==''){
       alert('Choose a starting date');
       this.trainer.startdate='';
         this.trainer.enddate=''
     }
     else if(dt>=dte){
       alert('Start date should be before end date!');
       this.trainer.startdate='';
         this.trainer.enddate=''
         
     }
     else{
      for(let i=0;i<this.dates.length;i++){
        var start=new Date (this.dates[i].startdate);
        var end=new Date(this.dates[i].enddate);
        console.log(dt.getTime());
        console.log(start.getTime())
       if((dt.getTime()>=start.getTime() && dte.getTime()<=end.getTime())||(dt.getTime()>=start.getTime()&&dt.getTime()<=end.getTime())||(dte.getTime()>=start.getTime()&&dte.getTime()<=end.getTime()))
     
     
       {
          alert('Already alloacted between '+this.dates[i].startdate+' and '+this.dates[i].enddate);
          this.trainer.startdate='';
          this.trainer.enddate=''
          break;
       }
      }
     }
     
}
}

