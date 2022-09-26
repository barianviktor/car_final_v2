import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartypeFormListComponent } from './cartype-form-list.component';

describe('CartypeFormListComponent', () => {
  let component: CartypeFormListComponent;
  let fixture: ComponentFixture<CartypeFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartypeFormListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartypeFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
