import { Component, AfterViewInit, ViewContainerRef, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-vcr',
  templateUrl: './vcr.component.html',
  styleUrls: ['./vcr.component.css']
})
export class VcrComponent implements AfterViewInit {
  @ViewChild(TemplateRef)
  private tpl: TemplateRef<HTMLElement>;

  constructor(private container: ViewContainerRef) { }


  ngAfterViewInit(): void {
    this.container.createEmbeddedView(this.tpl);
  }
}
