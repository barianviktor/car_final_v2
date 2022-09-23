import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakersNewComponent } from './makers-new.component';

describe('MakersNewComponent', () => {
  let component: MakersNewComponent;
  let fixture: ComponentFixture<MakersNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakersNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
