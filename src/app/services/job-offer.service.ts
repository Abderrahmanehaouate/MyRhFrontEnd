import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JobOfferModel} from "../models/jobOffer.model";
import {Observable} from "rxjs";
import {PostulationModel} from "../models/postulation.model";

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  constructor(private http:HttpClient) { }

  getAllJobOffers(page: number, size: number, sortBy: string): Observable<Array<JobOfferModel>> {
    return this.http.get<Array<JobOfferModel>>(`http://localhost:8080/api/v1/jobOffers?page=${page}&size=${size}&sortBy=${sortBy}`);
  }
  getJobOfferById(id: number): Observable<JobOfferModel> {
    return this.http.get<JobOfferModel>(`http://localhost:8080/api/v1/jobOffers/${id}`);
  }

  applyToJobOffer(postulation: PostulationModel) {
    return this.http.post(`http://localhost:8080/api/v1/postulations/create`, postulation);
  }
}
