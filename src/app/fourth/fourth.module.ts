import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourthComponent } from './fourth.component';
import { FourthRoutingModule } from './fourth-routing.module';
import { FirstTimerComponent } from './first-timer/first-timer.component';
import { SecondTimerComponent } from './second-timer/second-timer.component';
import { ThirdTimerComponent } from './third-timer/third-timer.component';
import { FourthTimerComponent } from './fourth-timer/fourth-timer.component';


@NgModule({
  declarations: [ FourthComponent, FirstTimerComponent, SecondTimerComponent, ThirdTimerComponent, FourthTimerComponent ],
  imports: [CommonModule, FourthRoutingModule],
  exports: [ FourthComponent ],
  providers: []
})
export class FourthModule {
  constructor() {
    
  }
}