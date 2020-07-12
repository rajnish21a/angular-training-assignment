import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-first-timer',
  templateUrl: './first-timer.component.html',
  styleUrls: ['./first-timer.component.css']
})
export class FirstTimerComponent implements OnInit, OnDestroy {
  time:number;
  sub1;
  constructor(private _timerService: TimerService) { }

  ngOnInit(): void {
    this._timerService.time1.subscribe(timerData=>{
      this.time= timerData;
    });
  }

  ngOnDestroy(): void{
    this._timerService.time1.unsubscribe();
  }

}
