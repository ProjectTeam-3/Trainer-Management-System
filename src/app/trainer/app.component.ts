import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user=localStorage.getItem('user');
  
 public constructor(public auth:AuthService,private router:Router,private titleservice:Title){}
  
  title = 'Library App';
  nav=[{name:'Signup',link:'signup'},{name:'Login',link:'login'},{name:'Logout',link:'login'}]
  nav_left=[{name:'books',link:'books'},{name:'books',link:'books'}]
  logOutUser(){
sessionStorage.removeItem('token');
sessionStorage.removeItem('user')
this.router.navigate(['home'])
  }
  public setTitle( newTitle: string) {
    this.titleservice.setTitle( newTitle );
  }
}
