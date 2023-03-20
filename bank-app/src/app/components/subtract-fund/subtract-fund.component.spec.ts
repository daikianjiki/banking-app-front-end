import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtractFundComponent } from './subtract-fund.component';

describe('SubtractFundComponent', () => {
  let component: SubtractFundComponent;
  let fixture: ComponentFixture<SubtractFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtractFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtractFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
