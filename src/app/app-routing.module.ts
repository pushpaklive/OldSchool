import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { LoginComponent } from './login/login.component';

const routes:Routes = [
	{path: '', redirectTo: 'login', pathMatch: 'full'}, 
	{path: 'login', component: LoginComponent}
];

@NgModule({ 
  imports: [    
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [MyRouterModule]
})
export class MyRouterModule { }
//Not using this file for now..