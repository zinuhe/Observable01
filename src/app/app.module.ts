import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Observable } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example01Component } from './example01/example01.component';
import { Example02Component } from './example02/example02.component';
import { Example03Component } from './example03/example03.component';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [
    AppComponent,
    Example01Component,
    Example02Component,
    Example03Component,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Observable
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
