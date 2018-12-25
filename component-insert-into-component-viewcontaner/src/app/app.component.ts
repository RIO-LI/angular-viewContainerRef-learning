import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { ViewContainerComponent } from './view-container/view-container.component';
import { BeInsertedComponent } from './be-inserted/be-inserted.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(ViewContainerComponent, { read: ViewContainerRef })
  private vcrc: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver) {

  }

  ngAfterViewInit(): void {
    this.vcrc.createComponent(this.cfr.resolveComponentFactory(BeInsertedComponent));
  }

}
