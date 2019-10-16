import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrrrrComponent } from './brrrr.component';

describe('BrrrrComponent', () => {
  let component: BrrrrComponent;
  let fixture: ComponentFixture<BrrrrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrrrrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrrrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
