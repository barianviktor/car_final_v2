import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignsNewComponent } from './designs-new.component';

describe('DesignsNewComponent', () => {
  let component: DesignsNewComponent;
  let fixture: ComponentFixture<DesignsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignsNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
