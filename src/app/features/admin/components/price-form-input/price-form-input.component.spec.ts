import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceFormInputComponent } from './price-form-input.component';

describe('PriceFormInputComponent', () => {
  let component: PriceFormInputComponent;
  let fixture: ComponentFixture<PriceFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceFormInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
