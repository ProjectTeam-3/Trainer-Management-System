import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from "@angular/router";
import { AuthService} from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    adminemail:'',
    adminpass:''
  };
  trainer={
    traineremail:'',
    trainerpass:''
  }
  constructor(private admin:AdminService,private router:Router,private _auth: AuthService) { }

  ngOnInit(): void {
  }
  loginAdmin () {
    
    this.admin.loginAdmin(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.router.navigate(['/admin'])
        // console.log("success")
        localStorage.setItem('admin','admin');
        
      },
      err => {
        console.log(err);
        alert("Invalid email or password")
        this.router.navigate(['/login'])
      }
    ) 
  }
  loginTrainer() {
    this._auth.loginUser(this.trainer)
    .subscribe(
      res => {
        alert('successful login');
        this.router.navigate(['/trainer'])
        localStorage.setItem('email',res.email)
        localStorage.setItem('token', res.token)
      },
      err => {
        console.log(err);
        
        alert('Invalid login');
        this.router.navigate(['/login'])
      }
    ) 
  }
}
