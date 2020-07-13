import { NgModule } from '@angular/core';
import { FifthComponent } from './fifth.component';
import { FifthRoutingModule } from './fifth-routing.module';
import { CommonModule } from '@angular/common';
import { OrderByClickPipe } from './order-by-click.pipe';



@NgModule({
  declarations:[ FifthComponent, OrderByClickPipe ],
  imports:[ CommonModule , FifthRoutingModule],
  exports:[FifthComponent],
  providers:[OrderByClickPipe]
})
export class FifthModule {
  constructor() {

  }
}
