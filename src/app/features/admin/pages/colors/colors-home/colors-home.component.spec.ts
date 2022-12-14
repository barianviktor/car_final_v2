import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsHomeComponent } from './colors-home.component';

describe('ColorsHomeComponent', () => {
  let component: ColorsHomeComponent;
  let fixture: ComponentFixture<ColorsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
