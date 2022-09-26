import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorFormListComponent } from './motor-form-list.component';

describe('MotorFormListComponent', () => {
  let component: MotorFormListComponent;
  let fixture: ComponentFixture<MotorFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorFormListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
