import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second-timer',
  templateUrl: './second-timer.component.html',
  styleUrls: ['./second-timer.component.css']
})
export class SecondTimerComponent implements OnInit {
  @Output() reset= new EventEmitter<any>();
  @Output() forwardLog = new EventEmitter<Array<{action:string,time:number, timeStamp: Date}>>();
  @Output() onStartClick = new EventEmitter<number>();
  @Output() onPauseClick = new EventEmitter<number>();
  isStartFlag:boolean = false;


  timerLog:number;
  logs:Array<{action:string,time:number, timeStamp: Date}>=[];

  constructor() { }

  ngOnInit(): void {
  }

  onStartPause(input):void{
    let limit= input.value? +input.value:1000;
    if(!this.isStartFlag){
      this.onStartClick.emit(limit);
      this.logs.push({action:"start",time:this.timerLog, timeStamp: new Date()});
      this.forwardLog.emit(this.logs);
    }else{
      this.onPauseClick.emit();
      this.logs.push({action:"pause",time:this.timerLog, timeStamp: new Date()});
      this.forwardLog.emit(this.logs);
    }
    this.isStartFlag=!this.isStartFlag;

  }

  onReset(input): void{
    let limit= input.value? +input.value:1000;
    this.reset.emit(limit);
    this.logs.push({action:"reset",time:this.timerLog, timeStamp: new Date()});
    this.forwardLog.emit(this.logs);
  }

  getLogTime(time:number):void{
    this.timerLog = time;
  }
}
