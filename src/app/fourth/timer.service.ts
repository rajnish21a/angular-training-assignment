import {Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  limit:number;
  time1= new Subject<number>();
  resetCount = new Subject<number>();
  pauseCount = new Subject<number>();
  time:number = 1000;
  //@Output() logTime= new EventEmitter<number>();
  status:number = 0;
  timer_id:any;
  logs:Array<{action:string,time:number, timeStamp: Date}>=[];
  logs1= new Subject<Array<{action:string,time:number, timeStamp: Date}>>();

    constructor(){
      this.time1.next(this.time);
    }

    ngOnDestroy():void{
      clearInterval(this.timer_id);
    }

    timer(limitData?:number):void{
      if(!limitData){
        this.logs.push({action:"pause",time:this.time, timeStamp: new Date()});
        this.logs1.next(this.logs);
        limitData=this.time;
        this.status = 1;
        this.pauseCount.next();
      }else{
        this.logs.push({action:"start",time:this.time, timeStamp: new Date()});
        this.logs1.next(this.logs);
        this.status = 0;
      }
      clearInterval(this.timer_id);
      this.time=limitData;
      this.time1.next(this.time);
      this.limit=limitData;
      //this.logTime.emit(this.time);
      this.timer_id = setInterval(()=>{
              if(this.time)
              {
                if(this.status === 0){
                  this.time--;
                  this.time1.next(this.time);
                }else{
                  this.time;
                }
              }
      }, 1000);
    }

    onReset(limitData?:number):void{
      this.logs.push({action:"reset",time:this.time, timeStamp: new Date()});
      this.logs1.next(this.logs);
      this.limit=limitData;
      this.status = 0;
      this.time = this.limit?this.limit:1000;
      this.time1.next(this.time);
      this.resetCount.next();
    }


}
