import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourthComponent } from './fourth.component';
import { FourthRoutingModule } from './fourth-routing.module';


@NgModule({
  declarations: [ FourthComponent ],
  imports: [CommonModule, FourthRoutingModule],
  exports: [ FourthComponent ],
  providers: []
})
export class FourthModule {
  constructor() {
    
  }
}