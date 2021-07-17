import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  loginAdmin(user:any){
    return this.http.post<any>("http://localhost:3000/admin",user);
  }
  // loggedIn()
  // {
  //   return !!localStorage.getItem('token')
  // }
  // getToken()
  // {
  //   return localStorage.getItem('token')
  // }
}
