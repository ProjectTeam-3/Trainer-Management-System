import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TrainerComponent } from './trainer/trainer.component';
import { AdminComponent } from './admin/admin.component';
import { SuccessComponent } from './success/success.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { RequestsComponent } from './requests/requests.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainerapproveComponent } from './trainerapprove/trainerapprove.component';
import { SearchComponent } from './search/search.component';
import { TrainerallocationComponent } from './trainerallocation/trainerallocation.component'
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { AllocatedListComponent } from './allocated-list/allocated-list.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { ScheduleComponent } from './schedule/schedule.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'trainer',component:TrainerComponent,
  children:[
    { path: 'profile', component: TrainerProfileComponent },
    {path:'enrollment',component:EnrollmentComponent},
    {path:'success',component:SuccessComponent},
    {path:'schedule',component:ScheduleComponent}
    
  ]},
  {path:'admin',component:AdminComponent,
  children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'requests',component:RequestsComponent},
    {path:'approval',component:TrainerapproveComponent},
    {path:'',component:DashboardComponent},
    {path:'search',component:SearchComponent},
    {path:'allocation',component:TrainerallocationComponent},
    {path:'allocatedlist',component:AllocatedListComponent},
    {path:'trainerlist',component:TrainerListComponent},
    {
      path:'home',component:DashboardComponent
    },
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
