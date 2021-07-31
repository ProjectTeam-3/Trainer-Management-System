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
  
  constructor(private trainerlistService:AdminService,private router:Router) { }

  ngOnInit(): void {
    let  trainerId = localStorage.getItem("gettrainerId");
    this.trainerlistService.getTrainer(trainerId).subscribe((data:any) =>{
      this.trainer = JSON.parse(JSON.stringify(data));
      console.log(this.trainer)
      this.tname=this.trainer.fname +' '+this.trainer.lname;
    })
  }
  schedule(){
    console.log(this.trainer);
    this.trainerlistService.schedule(this.trainer);
    this.router.navigate(['/admin/dashboard']);

  }
}

