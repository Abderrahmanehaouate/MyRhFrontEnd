import {JobOfferModel} from "./jobOffer.model";

export interface PostulationModel {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    cv: string
  jobOffer: JobOfferModel

}
