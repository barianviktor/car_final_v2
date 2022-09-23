import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartypesHomeComponent } from './cartypes-home.component';

describe('CartypesHomeComponent', () => {
  let component: CartypesHomeComponent;
  let fixture: ComponentFixture<CartypesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartypesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartypesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
