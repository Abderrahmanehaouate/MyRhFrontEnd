import { Component, Input } from '@angular/core';
import {JobOfferModel} from "../../models/jobOffer.model";

@Component({
  selector: 'app-job-details',
  template: `
    <div class="py-8">
      <h1 class="text-4xl font-extrabold mb-4">{{ jobOffer.title }}</h1>
      <p class="text-gray-600 text-sm">Published on <time datetime="2022-04-05">{{ jobOffer.createdAt }}</time></p>
    </div>
    <img src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c" alt="Featured image" class="w-full h-auto mb-8 border rounded-lg shadow-lg">

    <div class="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
      <p>{{ jobOffer.description }}</p>
    </div>
  `,
})
export class JobDetailsComponent {
  @Input() jobOffer!: JobOfferModel;
}
