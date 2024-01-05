import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJobOfferComponent } from './show-job-offer.component';

describe('ShowJobOfferComponent', () => {
  let component: ShowJobOfferComponent;
  let fixture: ComponentFixture<ShowJobOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowJobOfferComponent]
    });
    fixture = TestBed.createComponent(ShowJobOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
