import {Company} from "./company.model";

export interface JobOfferModel {
  id: number
  title: string
  description: string
  profile: string
  city: string
  createdAt: any
  educationLevel: string
  status: string
  salary: string
  company: Company
}
