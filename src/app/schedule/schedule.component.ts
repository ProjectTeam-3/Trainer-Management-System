import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarView } from 'angular-calendar';
import {
 
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { timeStamp } from 'console';
import { startOfDay } from 'date-fns';
import { AuthService } from '../auth.service';
import { TrainerProfileService } from '../trainer-profile.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {
  
  constructor(private calender:TrainerProfileService,private gettoken:AuthService,private modal: NgbModal) { }
  // @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  schedules:any=[];
 items:CalendarEvent[]=[]
//  actions:CalendarEventAction[]=[];
  ngOnInit(): void {
    var email=localStorage.getItem('email')
    this.calender.getSchedule(email)
    .subscribe((data)=>{
      this.schedules=(JSON.parse(JSON.stringify(data)))
      
      for(let i=0;i<=this.schedules.length;i++){
      
        this.events.push({
          start:startOfDay(new Date(this.schedules[i].startdate)),
          end:new Date(this.schedules[i].enddate),
          title: 'course id:' +this.schedules[i].courseid,
        })
        this.items.push({
          start:startOfDay(new Date(this.schedules[i].startdate)),
          end:new Date(this.schedules[i].enddate),
          title: 'course id:' +this.schedules[i].courseid,
          // actions:this.actions
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
  // modalData: {
  //   action: string;
  //   event: CalendarEvent;
  // };
  // handleEvent(action: string, event: CalendarEvent): void {
  //   this.modalData = { event, action };
  //   this.modal.open(this.modalContent, { size: 'lg' });
  // }
  // actions: CalendarEventAction[] = [
  //   {
  //     label: '<i class="fas fa-fw fa-pencil-alt"></i>',
  //     a11yLabel: 'Edit',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.handleEvent('Edited', event);
  //     },
  //   },
  //   {
  //     label: '<i class="fas fa-fw fa-trash-alt"></i>',
  //     a11yLabel: 'Delete',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.events = this.events.filter((iEvent) => iEvent !== event);
  //       this.handleEvent('Deleted', event);
  //     },
  //   },
  // ];
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    
  }
  
}


