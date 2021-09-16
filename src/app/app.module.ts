import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { MainPage } from './pages/main/main.component';
import { SecondPage } from './pages/second/second.component';
import { ThirdPage } from './pages/third/third.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RoutingModule],
  declarations: [AppComponent, MainPage, SecondPage, ThirdPage],
  bootstrap: [AppComponent],
})
export class AppModule {}
