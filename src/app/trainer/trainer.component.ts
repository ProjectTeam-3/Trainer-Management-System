import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  // trainer={
  //   traineremail:'',
  //   trainerusername:'',
  //   trainerpass:'',
  //   photo:'',
  //   course:'',
  //   desig:'',
  //   currentcmpny:'',
  //   skillset:'',
  //   highqualification:'',
  //   trainerAddress:'',
  //   trainerPhone:''
  // }
  constructor(private trainerservice:TrainerService,private router:Router) { }

  ngOnInit(): void {
  }


}
