import { NgModule } from '@angular/core';
import { FirstComponent } from './first.component';
import { FirstRoutingModule } from './first-routing.module';


@NgModule({
  declarations:[
    FirstComponent
  ],
  exports:[
    FirstComponent
  ],
  imports:[
    FirstRoutingModule
  ],
  providers:[]
})
export class FirstModule {
}