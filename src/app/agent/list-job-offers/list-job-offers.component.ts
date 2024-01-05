import {Component, OnInit} from '@angular/core';
import {JobOfferService} from "../../services/job-offer.service";
import {JobOfferModel} from "../../models/jobOffer.model";

@Component({
  selector: 'app-list-job-offers',
  templateUrl: './list-job-offers.component.html',
  styleUrls: ['./list-job-offers.component.css']
})
export class ListJobOffersComponent implements OnInit{

    jobOffers: Array<JobOfferModel> = [];

  pageSize:number = 5;
  currentPage: number = 0;
  totalPages: number = 0;
  sortBy: string = 'createdAt,desc';
    constructor(private service:JobOfferService) {
    }
    ngOnInit() {
      this.getAllJobOffers();
    }

    private getAllJobOffers() {
      this.service.getAllJobOffers(this.currentPage, this.pageSize, this.sortBy)
        .subscribe({
          next: data => {
            //@ts-ignore
            this.jobOffers = data.content as Array<JobOfferModel>;
            //@ts-ignore
            this.totalPages = data.totalPages;
            },
          error: err => {
            console.error(err);
          }
        });
    }

  deleteJobOfferById(id: number, $event: MouseEvent) {

  }

  handlePageChange(number: number) {
    number < 0 ?  number = 0 : number;
    number > this.totalPages - 1 ? number = this.totalPages - 1 : number;
    this.currentPage = number;
    this.getAllJobOffers();
  }
}
