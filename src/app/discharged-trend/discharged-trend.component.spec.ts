import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargedTrendComponent } from './discharged-trend.component';

describe('DischargedTrendComponent', () => {
  let component: DischargedTrendComponent;
  let fixture: ComponentFixture<DischargedTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DischargedTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargedTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
