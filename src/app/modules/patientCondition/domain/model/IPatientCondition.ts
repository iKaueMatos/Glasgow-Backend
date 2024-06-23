import { IMedicalCondition } from "@modules/medicationCodition/domain/model/IMedicationCondition";
import { IPatient } from "@modules/patient/domain/entities/interfaces/IPatient";

export interface IPatientCondition {
  id: number;
  patientId: number;
  medicalConditionId: number;
  diagnosisDate: Date;
  patient: IPatient;
  medicalCondition: IMedicalCondition;
}