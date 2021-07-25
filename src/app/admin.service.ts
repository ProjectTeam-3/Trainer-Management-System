import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  loginAdmin(user:any){
    return this.http.post<any>("http://localhost:3000/admin",{'admin':user});
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
  searchByName(name:any){
    return this.http.get("http://localhost:3000/search/"+name);
  }
  getTrainers(){
    return this.http.get("http://localhost:3000/getTrainers");
  }
  searchBySkill(skill:any){
    console.log(skill);
    return this.http.get("http://localhost:3000/search/skill/"+skill);
  }
  searchByType(type:any){
    return this.http.get("http://localhost:3000/search/type/"+type);
  }
  searchByCourse(course:any){
    
    return this.http.get("http://localhost:3000/search/course/"+course);
  }
}
