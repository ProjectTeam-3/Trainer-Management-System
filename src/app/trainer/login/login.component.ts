import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
    user={
     email:'',
     password:''
   }
  constructor(private auth:AuthService,private router:Router) { }
 test=true;
loginUser(){
  console.log(this.user);
  this.auth.loginUser(this.user).subscribe(
    (res)=>{
  console.log(res.loginuser)
  if(res.user=="admin"){
  sessionStorage.setItem('token',res.token);
 
       this.router.navigate([''])
  }
  else if(res.user=="user"){
    
    sessionStorage.setItem('user',"user")
    this.router.navigate([''])
  }

},
(err)=>{
   //alert("Invalid Email or Password!") 
   this.test=false;
}
)

}
  ngOnInit(): void {
  }

}
