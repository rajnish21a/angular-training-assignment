import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second.component';
import { SecondViewComponent } from './second-view/second-view.component';
import { SecondViewTypeComponent } from './second-view-type/second-view-type.component';
import { SecondViewItemComponent } from './second-view-item/second-view-item.component';
import { SecondFilterViewComponent } from './second-filter-view/second-filter-view.component';

@NgModule({
  declarations:[
    SecondComponent,
    SecondViewComponent,
    SecondViewTypeComponent,
    SecondViewItemComponent,
    SecondFilterViewComponent
  ],
  imports:[CommonModule],
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