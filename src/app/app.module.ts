import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { IndicatorComponent } from './components/indicator/indicator.component';

@NgModule({
  declarations: [AppComponent, InputComponent, IndicatorComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
