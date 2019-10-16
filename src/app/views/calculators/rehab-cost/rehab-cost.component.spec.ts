import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabCostComponent } from './rehab-cost.component';

describe('RehabCostComponent', () => {
  let component: RehabCostComponent;
  let fixture: ComponentFixture<RehabCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RehabCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
