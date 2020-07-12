import { Component, OnInit, ViewChild } from '@angular/core';
import { FirstTimerComponent } from './first-timer/first-timer.component';
import { SecondTimerComponent } from './second-timer/second-timer.component';
import { ThirdTimerComponent } from './third-timer/third-timer.component';
import { FourthTimerComponent } from './fourth-timer/fourth-timer.component';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  @ViewChild(FirstTimerComponent ) child1: FirstTimerComponent ;
  @ViewChild( SecondTimerComponent) child2: SecondTimerComponent ;
  @ViewChild( ThirdTimerComponent) child3: ThirdTimerComponent ;
  @ViewChild( FourthTimerComponent) child4: FourthTimerComponent ;


  constructor() { }

  ngOnInit(): void {
  }

  onStartTimer(limit:number):void{
    this.child1.timer(limit);
  }

  onPauseTimer():void{
    this.child1.timer();
    this.child4.onPause();
  }

  onResetClicked(limit:number): void{
      this.child1.onReset(limit);
      this.child4.onReset();
  }

  onLogTime(time:number):void {
    this.child2.getLogTime(time);
  }

  onLogUpdate(logData:Array<{action:string,time:number, timeStamp: Date}>):void {
    this.child3.getLog(logData);
  }
}
