import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJobOffersComponent } from './list-job-offers.component';

describe('ListJobOffersComponent', () => {
  let component: ListJobOffersComponent;
  let fixture: ComponentFixture<ListJobOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListJobOffersComponent]
    });
    fixture = TestBed.createComponent(ListJobOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
