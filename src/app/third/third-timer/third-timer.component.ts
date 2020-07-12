import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-timer',
  templateUrl: './third-timer.component.html',
  styleUrls: ['./third-timer.component.css']
})
export class ThirdTimerComponent implements OnInit {
  logs:Array<{action:string,time:number, timeStamp: Date}>=[];
  constructor() { }

  ngOnInit(): void {
  }

  getLog(log:Array<{action:string,time:number, timeStamp: Date}>):void{
    this.logs = log;
  }
}
