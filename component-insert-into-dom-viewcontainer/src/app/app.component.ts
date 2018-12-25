import { Component, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver, Injector, ComponentRef } from '@angular/core';
import { BeInsertComponent } from './be-insert/be-insert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('container', { read: ViewContainerRef })
  private container: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver, private injector: Injector) {

  }

  ngAfterViewInit(): void {
    const cmpRef: ComponentRef<BeInsertComponent> = this.cfr.resolveComponentFactory(BeInsertComponent).create(this.injector);

    this.container.insert(cmpRef.hostView);

  }
}
