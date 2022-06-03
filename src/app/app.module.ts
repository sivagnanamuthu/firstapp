import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Lesson3Component } from './lessons/lesson3/lesson3.component';

//import lesson 4 module
import { Lesson4Module } from './lessons/lesson4/lesson4.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Lesson3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Lesson4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
