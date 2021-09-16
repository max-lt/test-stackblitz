import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { MainPage } from './pages/main/main.page';
import { SecondPage } from './pages/second/second.page';
import { ThirdPage } from './pages/third/third.page';

@NgModule({
  imports: [BrowserModule, FormsModule, RoutingModule],
  declarations: [AppComponent, MainPage, SecondPage, ThirdPage],
  bootstrap: [AppComponent],
})
export class AppModule {}
