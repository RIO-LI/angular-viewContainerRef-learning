import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeInsertComponent } from './be-insert/be-insert.component';

@NgModule({
  declarations: [
    AppComponent,
    BeInsertComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    BeInsertComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
