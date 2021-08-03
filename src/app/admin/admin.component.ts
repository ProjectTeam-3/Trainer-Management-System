import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public _adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }
  logoutUser()
  {
  localStorage.removeItem('token')
  this.router.navigate(['/login'])
  }

}
