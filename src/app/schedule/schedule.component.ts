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
  schedules=[{
    fname:'',
    lname: '',
    course: '',
    email: '',
    startdate :'',
    enddate:'',
    time:'',
    courseid:'',
    batchid:'',
    meetinglink:''
  }];
 

  ngOnInit(): void {
    this.calender.getSchedule()
    .subscribe((data)=>{
      this.schedules=(JSON.parse(JSON.stringify(data)))
    })
    
  }
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  
  setView(view: CalendarView) {
    this.view = view;
  }
  events: CalendarEvent[] = [
    {
      start:startOfDay(new Date(this.schedules[0].startdate)),
      end:new Date('2021-8-20'),
      title: 'First event',
    },
    // {
    //   start: startOfDay(new Date()),
    //   title: 'Second event',
    // }
  ]


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    
  }
  
}


