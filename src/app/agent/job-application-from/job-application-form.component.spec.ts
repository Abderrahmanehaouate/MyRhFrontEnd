import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplicationFormComponent } from './job-application-form.component';

describe('JobApplicationFromComponent', () => {
  let component: JobApplicationFormComponent;
  let fixture: ComponentFixture<JobApplicationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobApplicationFormComponent]
    });
    fixture = TestBed.createComponent(JobApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
