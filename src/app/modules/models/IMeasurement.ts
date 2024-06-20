import { IPatient } from "./IPatient";

export interface IMeasurement {
  id: number;
  patientId: number;
  type: string;
  value: number;
  timestamp: Date;
  patient: IPatient;
}