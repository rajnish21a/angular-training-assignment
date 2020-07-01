import { NgModule } from '@angular/core';
import { FifthComponent } from './fifth.component';
import { FifthRoutingModule } from './fifth-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations:[ FifthComponent ],
  imports:[ CommonModule , FifthRoutingModule],
  exports:[FifthComponent],
  providers:[]
})
export class FifthModule {
  constructor() {
    
  }
}