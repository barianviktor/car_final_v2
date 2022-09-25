import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDesignsComponent } from './search-designs.component';

describe('SearchDesignsComponent', () => {
  let component: SearchDesignsComponent;
  let fixture: ComponentFixture<SearchDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDesignsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
