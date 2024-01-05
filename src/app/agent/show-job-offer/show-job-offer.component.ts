import {Component, OnInit} from '@angular/core';
import {JobOfferModel} from "../../models/jobOffer.model";
import {JobOfferService} from "../../services/job-offer.service";
import {ActivatedRoute} from "@angular/router";
import {PostulationModel} from "../../models/postulation.model";

@Component({
    selector: 'app-show-job-offer',
    templateUrl: './show-job-offer.component.html'
})
export class ShowJobOfferComponent implements OnInit{
    jobOffer: JobOfferModel = {} as JobOfferModel;
    postulation: PostulationModel = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cv: '',
        jobOffer: {
            id: 0,
        }
    } as PostulationModel;
    constructor(private service:JobOfferService,
                private route:ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            const id = params['id'];
            this.getJobOfferById(id);
        })
    }

    getJobOfferById(id: number) {
        this.service.getJobOfferById(id)
            .subscribe({
                next: data => {
                    this.jobOffer = data as JobOfferModel;
                    console.log(this.jobOffer);
                },
                error: err => {
                    console.error(err);
                }
            });
    }

    applyToJobOffer(postulation: PostulationModel, id: number) {
        postulation.jobOffer.id = id;
        this.service.applyToJobOffer(postulation)
            .subscribe({
                next: () => {
                    console.log(postulation);
                },
                error: err => {
                    console.log(err);
                }
            })
    }
    onFileSelected($event: Event) {
        const files: FileList | null = ($event.target as HTMLInputElement).files;
        if (files && files.length > 0) {
            console.log(files[0]);
            this.postulation.cv =  files[0].name;
        }
    }
}

