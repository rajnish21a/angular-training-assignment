import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-first-timer',
  templateUrl: './first-timer.component.html',
  styleUrls: ['./first-timer.component.css']
})
export class FirstTimerComponent implements OnInit, OnDestroy {
  limit:number;
  time:number = 1000;
  @Output() logTime= new EventEmitter<number>();
  status:number = 0;
  timer_id:any;

  constructor() { }

  ngOnInit(): void {
    //this.timer();
  }

  ngOnDestroy():void{
    clearInterval(this.timer_id);
  }


  timer(limitData?:number):void{
    if(!limitData){
      limitData=this.time;
      this.status = 1;
    }else{
      this.status = 0;
    }
    clearInterval(this.timer_id);
    this.time=limitData;
    this.limit=limitData;
    this.logTime.emit(this.time);
    this.timer_id = setInterval(()=>{
            if(this.time)
            {
              if(this.status === 0){
                this.time--;
              }else{
                this.time;
              }
            }
    }, 1000);
  }

  onReset(limitData?:number):void{
    this.logTime.emit(this.time);
    this.limit=limitData;
    this.status = 0;
    this.time = this.limit?this.limit:1000;
  }
}
