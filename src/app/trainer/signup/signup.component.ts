import { rendererTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public auth: AuthService, private router:Router) { }

  ngOnInit(): void {
   

  }
user={
  username:'',
  email:'',
  password:''
}
repwd=''
userVerify(){
  alert("Success!");
  console.log(this.user);
  this.auth.signupUser(this.user).subscribe((res)=>{
  this.router.navigate(['login'])
  })
}
message:any;
checkPwd(){
  this.message="Re-Entered Password is not matching";
}
}
