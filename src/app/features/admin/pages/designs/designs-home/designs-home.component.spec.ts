import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsHomeComponent } from './designs-home.component';

describe('DesignsHomeComponent', () => {
  let component: DesignsHomeComponent;
  let fixture: ComponentFixture<DesignsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
