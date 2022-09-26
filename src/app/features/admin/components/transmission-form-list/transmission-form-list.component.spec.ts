import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissionFormListComponent } from './transmission-form-list.component';

describe('TransmissionFormListComponent', () => {
  let component: TransmissionFormListComponent;
  let fixture: ComponentFixture<TransmissionFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmissionFormListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransmissionFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
