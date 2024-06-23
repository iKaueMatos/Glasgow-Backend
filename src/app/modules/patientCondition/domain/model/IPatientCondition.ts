import { IMedicalCondition } from "../../../medicationCodition/domain/model/IMedicationCondition";
import { IPatient } from "../../../patient/domain/model/IPatient";

export interface IPatientCondition {
  id: number;
  patientId: number;
  medicalConditionId: number;
  diagnosisDate: Date;
  patient: IPatient;
  medicalCondition: IMedicalCondition;
}