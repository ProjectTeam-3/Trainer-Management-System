import { Component, OnInit } from '@angular/core';
// import { request } from 'http';
import { AdminService } from '../admin.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests=[{
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
  }]
  constructor(private requestlistService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.requestlistService.getRequestlist().subscribe((data)=>{
      this.requests=JSON.parse(JSON.stringify(data));
      console.log(this.requests)
    })
  }
  Reject(request:any)
  {
    this.requestlistService.Reject(request._id)
      .subscribe((data) => {
        this.requests = this.requests.filter(p => p !== request);
      })

  }
  Approve(request:any){
    
    localStorage.setItem("editrequestId", request._id.toString());
    this.router.navigate(['/admin/approval']);
    // alert("Trainer is approved")
  }
  
  

}
