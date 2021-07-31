import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainerProfileService {

  constructor(public http:HttpClient) { }
  getTrainerProfile() {
    return this.http.get('http://localhost:3000/trainerProfile');
  }
}
