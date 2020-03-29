import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathsTrendComponent } from './deaths-trend.component';

describe('DeathsTrendComponent', () => {
  let component: DeathsTrendComponent;
  let fixture: ComponentFixture<DeathsTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathsTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathsTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
