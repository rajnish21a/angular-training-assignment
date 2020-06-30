import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SecondRoutingModule } from './second/second-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstComponent } from './first/first.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';


const appRoutes: Routes = [
  {path: '', component: FirstComponent},
  {path:'second', loadChildren: ()=>import('./second/second.module').then((m)=>{ m.SecondModule })},
  {path: 'third', component: ThirdComponent},
  {path: 'fourth', component: FourthComponent},
  {path: 'fifth', component: FifthComponent},
  {path: 'sixth', component: SixthComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules}),
    SecondRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
