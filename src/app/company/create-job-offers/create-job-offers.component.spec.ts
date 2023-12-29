import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobOffersComponent } from './create-job-offers.component';

describe('CreateJobOffersComponent', () => {
  let component: CreateJobOffersComponent;
  let fixture: ComponentFixture<CreateJobOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateJobOffersComponent]
    });
    fixture = TestBed.createComponent(CreateJobOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
