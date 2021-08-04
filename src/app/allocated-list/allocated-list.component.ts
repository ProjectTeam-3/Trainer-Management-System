import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-allocated-list',
  templateUrl: './allocated-list.component.html',
  styleUrls: ['./allocated-list.component.css']
})
export class AllocatedListComponent implements OnInit {
  trainers=[{
    fname:'',
  lname: '',
  email: '',
  course: '',
  startdate :'',
  enddate:'',
  time:'',
  courseid:'',
  batchid:'',
  meetinglink:''
  }]
  constructor(private allocationlistService:AdminService) { }

  ngOnInit(): void {
    this.allocationlistService.getAllocatedlist().subscribe((data)=>{
      this.trainers=JSON.parse(JSON.stringify(data));
      console.log(this.trainers);
    })
  }

}
