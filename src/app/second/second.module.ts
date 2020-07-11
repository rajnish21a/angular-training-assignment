import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { SecondComponent } from './second.component';
import { SecondViewComponent } from './second-view/second-view.component';
import { SecondViewTypeComponent } from './second-view-type/second-view-type.component';
import { SecondViewItemComponent } from './second-view-item/second-view-item.component';
import { SecondFilterViewComponent } from './second-filter-view/second-filter-view.component';
import { SecondRoutingModule } from './second-routing.module';
import { OrderByPipePipe } from './order-by-pipe.pipe';

@NgModule({
  declarations:[
    SecondComponent,
    SecondViewComponent,
    SecondViewTypeComponent,
    SecondViewItemComponent,
    SecondFilterViewComponent,
    OrderByPipePipe
  ],
  imports:[CommonModule,SecondRoutingModule, HttpClientModule],
  exports:[
    SecondComponent,
    SecondViewComponent,
    SecondViewTypeComponent,
    SecondViewItemComponent,
    SecondFilterViewComponent
  ],
  providers:[]
})
export class SecondModule{}
