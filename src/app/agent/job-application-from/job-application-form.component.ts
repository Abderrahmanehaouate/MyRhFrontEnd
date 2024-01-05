import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostulationModel} from "../../models/postulation.model";

@Component({
  selector: 'app-job-application-from',
  template: `
    <div class="max-w-2xl mx-auto bg-white p-16">
      <form [formGroup]="jobApplicationForm" (ngSubmit)="submitApplication()">
        <div class="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label for="firstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              class="bg-amber-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Abderrahman"
              required
            >
          </div>
          <div>
            <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              class="bg-amber-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Haouate"
              required
            >
          </div>
        </div>
        <div class="mb-6">
          <label for="numero_de_telephone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Numero de telephone
          </label>
          <input
            type="number"
            id="numero_de_telephone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="+212 6 00 00 00 00"
            required
          >
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your email address"
            required
          >
        </div>
        <div class="mb-6">
          <label for="file" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Import your CV
          </label>
          <input
            type="file"
            id="file"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Import your CV here"
            (change)="onFileSelected($event)"
            required
          >
        </div>
        <button
          type="submit"
          [disabled]="jobApplicationForm.invalid"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Apply
        </button>
        <a routerLink="" class="text-gray-600 hover:underline">
          Back to job offers
        </a>
      </form>
    </div>
  `,
})
export class JobApplicationFormComponent {
  @Output() applicationSubmitted = new EventEmitter<PostulationModel>();
  jobApplicationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.jobApplicationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cv: ['', Validators.required],
    });
  }

  submitApplication() {
    if (this.jobApplicationForm.valid) {
      const formData: PostulationModel = {
        firstName: this.jobApplicationForm.get('firstName')?.value,
        lastName: this.jobApplicationForm.get('lastName')?.value,
        phone: this.jobApplicationForm.get('phone')?.value,
        email: this.jobApplicationForm.get('email')?.value,
        cv: this.jobApplicationForm.get('cv')?.value,
        jobOffer: {
          id: this.jobApplicationForm.get('jobOffer')?.value.id,
        }
      } as PostulationModel;
        this.applicationSubmitted.emit();
        this.jobApplicationForm.reset(); // Optionally reset the form after submission
    }
  }

  onFileSelected(event: Event) {
    const files: FileList | null = (event.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      const selectedFile: File = files[0];
      this.jobApplicationForm.patchValue({ cv: selectedFile.name });
    }
  }
}
