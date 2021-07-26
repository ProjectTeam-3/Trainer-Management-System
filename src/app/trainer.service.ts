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
  addRequest(fd:any){
    console.log(fd);
    return this.http.post<any>("http://localhost:3000/request",fd).subscribe((data)=>{
      console.log(data);
    })
  }
  getRequestlist(){
    return this.http.get("http://localhost:3000/requestlist");
  }
  Reject(id:any)
  {

    return this.http.delete("http://localhost:3000/reject/"+id)

  }
  getRequest(id:any){
    return this.http.get("http://localhost:3000/approverequest/"+id);
  }
  getApprove(approvedtrainer:any){
    return this.http.post("http://localhost:3000/approvedtrainer",approvedtrainer)
    .subscribe(data =>{console.log(data)})

  }
  
}
