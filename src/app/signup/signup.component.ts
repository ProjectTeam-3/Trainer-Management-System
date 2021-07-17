import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TrainerService } from '../trainer.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userItem={
    traineremail:'',
    trainerusername:'',
    trainerpass:''
  }
  constructor(private TrainerService: TrainerService,private router: Router) { }

  ngOnInit(): void {
  }
  AddTrainer()
  {    
    this.TrainerService.newTrainer(this.userItem);
    console.log("Called");    
    alert("Successfully Registered");
    this.router.navigate(['/login']);
  }

}
