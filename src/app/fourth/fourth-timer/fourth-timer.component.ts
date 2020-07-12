import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-fourth-timer',
  templateUrl: './fourth-timer.component.html',
  styleUrls: ['./fourth-timer.component.css']
})
export class FourthTimerComponent implements OnInit {
  resetCounter:number=0;
  pauseCounter:number=0;
  constructor(private _timerService: TimerService) { }

  ngOnInit(): void {
    this._timerService.pauseCount.subscribe(()=>{
      this.pauseCounter++;
    });

    this._timerService.resetCount.subscribe(()=>{
      this.resetCounter++;
    });
  }
}
