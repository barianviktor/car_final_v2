import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakersHomeComponent } from './makers-home.component';

describe('MakersHomeComponent', () => {
  let component: MakersHomeComponent;
  let fixture: ComponentFixture<MakersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakersHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
