import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsFormListComponent } from './colors-form-list.component';

describe('ColorsFormListComponent', () => {
  let component: ColorsFormListComponent;
  let fixture: ComponentFixture<ColorsFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsFormListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorsFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
