import { Component, AfterViewInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef })
  private vcr: ViewContainerRef;

  @ViewChild(TemplateRef)
  private tpl: TemplateRef<HTMLElement>;

  constructor() {

  }

  ngAfterViewInit(): void {
    this.vcr.createEmbeddedView(this.tpl);
  }
}
