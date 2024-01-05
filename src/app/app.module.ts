import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateJobOffersComponent } from './company/create-job-offers/create-job-offers.component';
import { AuthComponent } from './company/auth/auth.component';
import { LoginComponent } from './company/login/login.component';
import { HomeComponent } from './home/home.component';
import { ShowJobOfferComponent } from './agent/show-job-offer/show-job-offer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { JobDetailsComponent } from './agent/job-details/job-details.component';
import { JobApplicationFormComponent } from './agent/job-application-from/job-application-form.component';
import { JobOffersComponent } from './job-offers/job-offers.component';
import {ListJobOffersComponent} from "./agent/list-job-offers/list-job-offers.component";

@NgModule({
  declarations: [
    AppComponent,
    CreateJobOffersComponent,
    AuthComponent,
    ListJobOffersComponent,
    LoginComponent,
    HomeComponent,
    ShowJobOfferComponent,
    JobDetailsComponent,
    JobApplicationFormComponent,
    JobOffersComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
