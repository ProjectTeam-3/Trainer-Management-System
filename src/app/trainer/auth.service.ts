import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  loginUser(user:any){
     return this.http.post<any>('http://localhost:3000/login',user)
  }
  loggedIn(){
    return !!sessionStorage.getItem('token');
  }
  checkadmin(){
    return !!sessionStorage.getItem('user');
  }
  
  signupUser(user:any){
    return this.http.post<any>("http://localhost:3000/signup",user)
  }
  getToken(){
    return sessionStorage.getItem('token');
  }
  userLoggedIn(){
    return !!sessionStorage.getItem('user')
  }
}
