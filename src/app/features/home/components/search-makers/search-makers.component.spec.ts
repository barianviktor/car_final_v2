import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMakersComponent } from './search-makers.component';

describe('SearchMakersComponent', () => {
  let component: SearchMakersComponent;
  let fixture: ComponentFixture<SearchMakersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMakersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
