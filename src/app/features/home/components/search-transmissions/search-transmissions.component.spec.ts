import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTransmissionsComponent } from './search-transmissions.component';

describe('SearchTransmissionsComponent', () => {
  let component: SearchTransmissionsComponent;
  let fixture: ComponentFixture<SearchTransmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTransmissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchTransmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
