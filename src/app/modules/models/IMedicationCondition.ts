import { IPatientCondition } from "./IPatientCondition";

export interface IMedicalCondition {
  id: number;
  name: string;
  description: string;
  conditions: IPatientCondition[];
}