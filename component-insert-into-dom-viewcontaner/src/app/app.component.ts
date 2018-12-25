import { Component, ViewChild, ViewContainerRef, AfterViewInit, ComponentFactoryResolver, Injector, ComponentRef } from '@angular/core';
import { VcrComponent } from './vcr/vcr.component';

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
    const cmpRef: ComponentRef<VcrComponent> = this.cfr.resolveComponentFactory(VcrComponent).create(this.injector);

    this.container.insert(cmpRef.hostView);

  }
}
