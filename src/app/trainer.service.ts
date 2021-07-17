import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  item={
    traineremail:'',
    trainerusername:'',
    trainerpass:''

  }
  constructor(private http:HttpClient) { }
  newTrainer(item:any){
    return this.http.post("http://localhost:3000/signup",{"trainer":item})
    .subscribe((data)=>{
      console.log(data);
    })
  }
}
