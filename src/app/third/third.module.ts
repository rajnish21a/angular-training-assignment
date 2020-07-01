import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdComponent } from './third.component';
import { ThirdRoutingModule } from './third-routing.module';


@NgModule({
  declarations: [ ThirdComponent ],
  imports: [CommonModule, ThirdRoutingModule],
  exports: [ThirdComponent],
  providers: []
})
export class ThirdModule {}