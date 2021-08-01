import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerProfileService } from '../trainer-profile.service';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {
  trainer:any;
  email=localStorage.getItem('email');
  constructor(private getProfile:TrainerProfileService,private router:Router) { }

  ngOnInit(): void {
    this.getProfile.getTrainerProfile(this.email)
    .subscribe((data)=>{
      console.log(data);
      this.trainer=data;
    })
  }

}
