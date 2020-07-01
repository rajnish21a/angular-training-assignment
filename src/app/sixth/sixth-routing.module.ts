import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixthComponent } from './sixth.component';

const routes: Routes = [
  {path: '', component: SixthComponent}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class SixthRoutingModule {
  constructor() {
  }
}