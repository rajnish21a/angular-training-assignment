import { NgModule } from '@angular/core';
import { SixthComponent } from './sixth.component';
import { CommonModule } from '@angular/common';
import { SixthRoutingModule } from './sixth-routing.module';


@NgModule({
  declarations:[SixthComponent],
  exports:[SixthComponent],
  imports:[CommonModule, SixthRoutingModule],
  providers:[]
})
export class SixthModule {
  constructor() {
    
  }
}