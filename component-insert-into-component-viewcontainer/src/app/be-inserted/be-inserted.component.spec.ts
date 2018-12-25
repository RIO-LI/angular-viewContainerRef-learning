import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeInsertedComponent } from './be-inserted.component';

describe('BeInsertedComponent', () => {
  let component: BeInsertedComponent;
  let fixture: ComponentFixture<BeInsertedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeInsertedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeInsertedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
