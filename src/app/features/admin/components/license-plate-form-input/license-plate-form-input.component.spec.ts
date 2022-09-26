import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePlateFormInputComponent } from './license-plate-form-input.component';

describe('LicensePlateFormInputComponent', () => {
  let component: LicensePlateFormInputComponent;
  let fixture: ComponentFixture<LicensePlateFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicensePlateFormInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicensePlateFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
