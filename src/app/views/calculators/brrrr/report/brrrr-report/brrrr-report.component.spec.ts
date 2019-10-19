import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrrrrReportComponent } from './brrrr-report.component';

describe('BrrrrReportComponent', () => {
  let component: BrrrrReportComponent;
  let fixture: ComponentFixture<BrrrrReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrrrrReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrrrrReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
