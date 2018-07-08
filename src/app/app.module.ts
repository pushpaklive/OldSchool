import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { PhotosComponent } from './photos/photos.component';
import { StoriesComponent } from './stories/stories.component';
import { ErrorComponent } from './error/error.component';
import { AnimationComponent } from './animation/animation.component';

const routes:Routes = [
	{path: '', redirectTo: 'login', pathMatch: 'full'}, 
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'stories', component: StoriesComponent},
  {path: 'error', component: ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    PhotosComponent,
    StoriesComponent,
    ErrorComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),//for routes
    FormsModule,//for ngModel
    HttpClientModule//for services
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
