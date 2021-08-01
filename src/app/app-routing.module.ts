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
    
  ]},
  {path:'admin',component:AdminComponent,
  children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'requests',component:RequestsComponent},
    {path:'approval',component:TrainerapproveComponent},
    {path:'',component:DashboardComponent},
    {path:'search',component:SearchComponent},
    {
      path:'home',component:DashboardComponent
    },
    {path:'allocation',component:TrainerallocationComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
