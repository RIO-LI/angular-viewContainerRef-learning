import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcrComponent } from './vcr.component';

describe('VcrComponent', () => {
  let component: VcrComponent;
  let fixture: ComponentFixture<VcrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
