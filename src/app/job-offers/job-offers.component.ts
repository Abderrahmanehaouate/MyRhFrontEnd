import {Component, OnInit} from '@angular/core';
import {JobOfferModel} from "../models/jobOffer.model";
import {JobOfferService} from "../services/job-offer.service";

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.css']
})
export class JobOffersComponent implements OnInit{

  jobOffers: Array<JobOfferModel> = [];

  pageSize:number = 5;
  currentPage: number = 0;
  totalPages: number = 3;
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

  handlePageChange(number: number) {
    number < 0 ?  number = 0 : number;
    number > this.totalPages - 1 ? number = this.totalPages - 1 : number;
    this.currentPage = number;
    this.getAllJobOffers();
  }
}
