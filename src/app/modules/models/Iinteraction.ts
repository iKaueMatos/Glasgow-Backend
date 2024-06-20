import { IPatient } from "./IPatient";

export interface Iinteraction {
  id: number;
  patientId: number;
  question: string;
  answer: string;
  timestamp: Date;
  patient: IPatient;
}