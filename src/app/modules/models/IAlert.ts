import { IPatient } from "./IPatient";

export interface IAlert {
  id: number;
  patientId: number;
  type: string;
  message: string;
  timestamp: Date;
  patient: IPatient;
}