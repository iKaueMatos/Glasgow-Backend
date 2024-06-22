import { IPatientCondition } from "../../../patientCondition/domain/model/IPatientCondition";

export interface IMedicalCondition {
  id: number;
  name: string;
  description: string;
  conditions: IPatientCondition[];
}