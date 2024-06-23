import { IMedication } from "../../../medication/domain/model/IMedication";
import { IPatient } from "../../../patient/domain/entities/interfaces/IPatient";

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