import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-third-timer',
  templateUrl: './third-timer.component.html',
  styleUrls: ['./third-timer.component.css']
})
export class ThirdTimerComponent implements OnInit {
  logs:Array<{action:string,time:number, timeStamp: Date}>=[];
  constructor(private _timerService: TimerService) { }

  ngOnInit(): void {
    this._timerService.logs1.subscribe(logData=>{
      this.logs= logData;
    });
  }

}
