import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankLogoComponent } from './bank-logo.component';

describe('BankLogoComponent', () => {
  let component: BankLogoComponent;
  let fixture: ComponentFixture<BankLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
