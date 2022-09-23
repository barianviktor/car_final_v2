import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsNewComponent } from './colors-new.component';

describe('ColorsNewComponent', () => {
  let component: ColorsNewComponent;
  let fixture: ComponentFixture<ColorsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
