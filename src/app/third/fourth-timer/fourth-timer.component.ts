import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-timer',
  templateUrl: './fourth-timer.component.html',
  styleUrls: ['./fourth-timer.component.css']
})
export class FourthTimerComponent implements OnInit {
  resetCounter:number=0;
  pauseCounter:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onPause():void{
    this.pauseCounter++;
  }

  onReset():void{
    this.resetCounter++;
  }
}
