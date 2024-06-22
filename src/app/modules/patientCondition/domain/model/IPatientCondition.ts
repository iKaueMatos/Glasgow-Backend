import { IMedicalCondition } from "./IMedicationCondition";
import { IPatient } from './IPatient'


export interface IPatientCondition {
  id: number;
  patientId: number;
  medicalConditionId: number;
  diagnosisDate: Date;
  patient: IPatient;
  medicalCondition: IMedicalCondition;
}