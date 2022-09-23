import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartypesNewComponent } from './cartypes-new.component';

describe('CartypesNewComponent', () => {
  let component: CartypesNewComponent;
  let fixture: ComponentFixture<CartypesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartypesNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartypesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
