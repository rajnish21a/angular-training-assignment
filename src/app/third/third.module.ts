import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdComponent } from './third.component';
import { ThirdRoutingModule } from './third-routing.module';
import { FirstTimerComponent } from './first-timer/first-timer.component';
import { SecondTimerComponent } from './second-timer/second-timer.component';
import { ThirdTimerComponent } from './third-timer/third-timer.component';
import { FourthTimerComponent } from './fourth-timer/fourth-timer.component';


@NgModule({
  declarations: [ ThirdComponent, FirstTimerComponent, SecondTimerComponent, ThirdTimerComponent, FourthTimerComponent ],
  imports: [CommonModule, ThirdRoutingModule],
  exports: [ThirdComponent],
  providers: []
})
export class ThirdModule {}