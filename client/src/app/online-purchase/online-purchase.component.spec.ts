import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePurchaseComponent } from './online-purchase.component';

describe('OnlinePurchaseComponent', () => {
  let component: OnlinePurchaseComponent;
  let fixture: ComponentFixture<OnlinePurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinePurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
