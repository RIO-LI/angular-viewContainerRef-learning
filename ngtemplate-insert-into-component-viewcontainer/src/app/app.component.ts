import { Component, ViewChild, ViewContainerRef, AfterViewInit, TemplateRef } from '@angular/core';
import { VcrComponent } from './vcr/vcr.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(VcrComponent, { read: ViewContainerRef })
  private vrc: ViewContainerRef;

  @ViewChild(TemplateRef)
  private tpl: TemplateRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.vrc.createEmbeddedView(this.tpl);
  }
}
