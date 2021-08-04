import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerProfileService {

  constructor(public http:HttpClient) { }
  getTrainerProfile(token:any) {
    return this.http.get('http://localhost:3000/trainerProfile'+token);
  }
  getSchedule(){
    return this.http.get('http://localhost:3000/schedule');

  }
}
