import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourthComponent } from './fourth.component';


const routes: Routes = [
  {path: '', component: FourthComponent}
]

@NgModule({
 imports: [ RouterModule.forChild(routes) ],
 exports: [ RouterModule ]
})
export class FourthRoutingModule {}