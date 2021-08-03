import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TrainerComponent } from './trainer/trainer.component';
import { AdminComponent } from './admin/admin.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { SuccessComponent } from './success/success.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { RequestsComponent } from './requests/requests.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrainerapproveComponent } from './trainerapprove/trainerapprove.component';
import { SearchComponent } from './search/search.component';
import { TrainerallocationComponent } from './trainerallocation/trainerallocation.component';
import { TrainerProfileComponent } from './trainer-profile/trainer-profile.component';
import { AllocatedListComponent } from './allocated-list/allocated-list.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AboutusComponent,
    TrainerComponent,
    AdminComponent,
    SuccessComponent,
    EnrollmentComponent,
    RequestsComponent,
    DashboardComponent,
    TrainerapproveComponent,
    SearchComponent,
    TrainerallocationComponent,
    TrainerProfileComponent,
    AllocatedListComponent,
    TrainerListComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // MatDatepickerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
