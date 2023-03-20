import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDisplayComponent } from './transaction-display.component';

describe('TransactionDisplayComponent', () => {
  let component: TransactionDisplayComponent;
  let fixture: ComponentFixture<TransactionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
