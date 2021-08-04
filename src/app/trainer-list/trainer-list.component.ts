import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { TrainerProfileService } from '../trainer-profile.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {
  trainers=[{
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
  }];
  imagePath: string;
  constructor(private adminservice:AdminService, private router:Router,private getProfile:TrainerProfileService ) { this.imagePath= environment.imagePath}
  
  ngOnInit(): void {
    this.adminservice.getTrainers().subscribe((data)=>{
    this.trainers=(JSON.parse(JSON.stringify(data)))})
  }
  Allocate(trainer:any){
    localStorage.setItem("gettrainerId", trainer._id.toString());
    
    this.router.navigate(['/admin/allocation']);
  
  }
  Remove(trainer:any)
  {
    this.adminservice.Remove(trainer._id)
      .subscribe((data) => {
        this.trainers = this.trainers.filter(p => p !== trainer);
      })
  }

}
