import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadingStrategy, PreloadAllModules} from '@angular/router';
import { SecondComponent } from './second.component';

const Routes:Routes = [
  {path: '', component: SecondComponent}
];

@NgModule({
  imports:[RouterModule.forChild(Routes)],
  exports:[RouterModule]
})
export class SecondRoutingModule{}
