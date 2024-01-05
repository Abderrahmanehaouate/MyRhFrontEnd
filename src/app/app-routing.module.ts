import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListJobOffersComponent} from "./agent/list-job-offers/list-job-offers.component";
import {HomeComponent} from "./home/home.component";
import {CreateJobOffersComponent} from "./company/create-job-offers/create-job-offers.component";
import {ShowJobOfferComponent} from "./agent/show-job-offer/show-job-offer.component";
import {JobOffersComponent} from "./job-offers/job-offers.component";

const routes: Routes = [
  { path: 'agent', component: ListJobOffersComponent },
  { path: "jobOffers", component: JobOffersComponent},
  { path: 'company/create-job-offer', component: CreateJobOffersComponent },
  { path: 'agent/job-offers/:id', component: ShowJobOfferComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
