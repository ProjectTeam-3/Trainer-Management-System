import { Component, OnInit } from '@angular/core';
import { TrainerProfileService } from '../trainer-profile.service';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {
  trainer:any;
  
  constructor(private getProfile:TrainerProfileService) { }

  ngOnInit(): void {
    this.getProfile.getTrainerProfile()
    .subscribe((data)=>{
      console.log(data);
      this.trainer=data;
    })
  }

}
