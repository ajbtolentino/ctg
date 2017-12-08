import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { PublicComponent } from './layout/public';
import { SecureComponent } from './layout/secure';

import { ProfileComponent } from './profile/profile.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../common/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    PublicComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
