import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerProfileService {

  constructor(public http:HttpClient) { }
  getTrainerProfile(email:any) {
    return this.http.post('http://localhost:3000/trainerProfile',{email});
  }
  editProfile(email:any){
    
    return this.http.post('http://localhost:3000/editProfile',{email});
  }
}
