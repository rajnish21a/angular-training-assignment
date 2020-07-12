import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-second-timer',
  templateUrl: './second-timer.component.html',
  styleUrls: ['./second-timer.component.css']
})
export class SecondTimerComponent implements OnInit {
  isStartFlag:boolean = false;
  logs:Array<{action:string,time:number, timeStamp: Date}>=[];

  constructor(private _timerService:TimerService) { }

  ngOnInit(): void {
    this._timerService.logs1.subscribe(logData=>{
      this.logs= logData;
    });
  }

  onStartPause(input): void{
    const limit = input.value ? +input.value : 1000;
    if(!this.isStartFlag){
      this._timerService.timer(limit);
    }else{
      this._timerService.timer();
    }
    this.isStartFlag = !this.isStartFlag;
  }

  onReset(input): void{
    let limit= input.value? +input.value:1000;
    this._timerService.onReset(limit);
  }

}
