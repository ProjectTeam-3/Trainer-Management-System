import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';
import { TrainerProfileService } from '../trainer-profile.service';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {
  trainer:any;
  token:any;
  imagePath: string;
  
  constructor(private getProfile:TrainerProfileService ,private gettoken:AuthService) {
    this.imagePath= environment.imagePath
  }

  ngOnInit(): void {
    this.token=this.gettoken.getToken();
    this.getProfile.getTrainerProfile(this.token)
    .subscribe((data)=>{
      this.trainer=data;
    })
  }

}
