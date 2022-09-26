import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMotorsComponent } from './search-motors.component';

describe('SearchMotorsComponent', () => {
  let component: SearchMotorsComponent;
  let fixture: ComponentFixture<SearchMotorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchMotorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
