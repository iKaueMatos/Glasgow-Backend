import { IMedication } from "./IMedication";
import { IPatient } from "../../../patient/domain/model/IPatient";

export interface IPrescription {
  id: number;
  patientId: number;
  medicationId: number;
  dosage: string;
  frequency: string;
  startDate: Date;
  endDate: Date;
  patient: IPatient;
  medication: IMedication;
}