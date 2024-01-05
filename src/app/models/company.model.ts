import {JobOfferModel} from "./jobOffer.model";

export interface Company {
  id: number
  name: string
  description: string
  phone: string
  email: string
  login: any
  image: any
  jobOffers: JobOfferModel[]
}
