import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorExpensesComponent } from './exterior-expenses.component';

describe('ExteriorExpensesComponent', () => {
  let component: ExteriorExpensesComponent;
  let fixture: ComponentFixture<ExteriorExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExteriorExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExteriorExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
