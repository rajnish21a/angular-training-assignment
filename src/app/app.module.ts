import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SecondModule } from './second/second.module';
import { FirstModule } from './first/first.module';
import { ThirdModule } from './third/third.module';
import { FourthModule } from './fourth/fourth.module';
import { FifthModule } from './fifth/fifth.module';
import { SixthModule } from './sixth/sixth.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/first', pathMatch:'full'},
  {path: 'first', loadChildren:()=>import('./first/first.module').then(m=>m.FirstModule).catch( err => console.log('Oh no!') )},
  {path: 'second', loadChildren:()=>import('./second/second.module').then((m)=>m.SecondModule).catch( err => console.log('Oh no!') )},
  {path: 'third', loadChildren:()=>import('./third/third.module').then(m=>m.ThirdModule).catch(err => console.log('Oh no!'))},
  {path: 'fourth', loadChildren:()=>import('./fourth/fourth.module').then(m=>m.FourthModule).catch(err => console.log('Oh no!'))},
  {path: 'fifth', loadChildren: ()=>import('./fifth/fifth.module').then(m=>m.FifthModule).catch(err => console.log('Oh no!'))},
  {path: 'sixth', loadChildren:()=>import('./sixth/sixth.module').then(m=>m.SixthModule).catch(err=>console.log('Oh no!'))}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules}),
    SecondModule,
    FirstModule,
    ThirdModule,
    FourthModule,
    FifthModule,
    SixthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
