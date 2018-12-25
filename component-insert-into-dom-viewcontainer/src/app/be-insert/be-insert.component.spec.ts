import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeInsertComponent } from './be-insert.component';

describe('BeInsertComponent', () => {
  let component: BeInsertComponent;
  let fixture: ComponentFixture<BeInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
