import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewContainerComponent } from './view-container/view-container.component';
import { BeInsertedComponent } from './be-inserted/be-inserted.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewContainerComponent,
    BeInsertedComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [BeInsertedComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
