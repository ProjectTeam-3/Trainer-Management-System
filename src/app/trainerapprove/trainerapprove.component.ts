import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainerapprove',
  templateUrl: './trainerapprove.component.html',
  styleUrls: ['./trainerapprove.component.css']
})
export class TrainerapproveComponent implements OnInit {
  request={
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
  typeemp:''
  }
  
  constructor(private requestlistService:TrainerService,private router:Router) { }

  ngOnInit(): void {
    let  requestId = localStorage.getItem("editrequestId");
    this.requestlistService.getRequest(requestId).subscribe((data:any) =>{
      this.request = JSON.parse(JSON.stringify(data));
      console.log(this.request)
    })
  }
  getApprove(){
    this.requestlistService.getApprove(this.request);
    console.log(this.request);    
    alert("Trainer Approved");
    this.router.navigate(['/admin/requests']);
  }

}
