import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay } from 'date-fns';
import { AuthService } from '../auth.service';
import { TrainerProfileService } from '../trainer-profile.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private calender:TrainerProfileService,private gettoken:AuthService) { }
  schedules:any=[];
 items:CalendarEvent[]=[]

  ngOnInit(): void {
    var email=localStorage.getItem('email')
    this.calender.getSchedule(email)
    .subscribe((data)=>{
      this.schedules=(JSON.parse(JSON.stringify(data)))
      
      for(let i=0;i<=this.schedules.length;i++){
      
        // this.events.push({
        //   start:startOfDay(new Date(this.schedules[i].startdate)),
        //   end:new Date(this.schedules[i].enddate),
        //   title: 'course id:' +this.schedules[i].courseid,
        // })
        this.items.push({
          start:startOfDay(new Date(this.schedules[i].startdate)),
          end:new Date(this.schedules[i].enddate),
          title: 'course id:' +this.schedules[i].courseid,
          
        })
       console.log(this.events);
        this.events=this.items;
      }
      
    })
    console.log(this.schedules)
    
  }
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  
  setView(view: CalendarView) {
    this.view = view;
  }
  events: CalendarEvent[]=[]


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    
  }
  
}


