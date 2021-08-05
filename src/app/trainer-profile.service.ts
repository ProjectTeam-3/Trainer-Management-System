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
  getSchedule(email:any){
    return this.http.post('http://localhost:3000/schedule',{email:email});
  }
  editTrainerProfile(form:any) {
    console.log(form);
    return this.http.post('http://localhost:3000/editTrainerProfile',form);
  }
}
