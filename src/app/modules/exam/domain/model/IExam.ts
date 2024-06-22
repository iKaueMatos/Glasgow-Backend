import { IPatient } from "../patient/domain/model/IPatient";

export interface IExam {
  id: number;
  patientId: number;
  type: string;
  result: string;
  examDate: Date;
  category: string;
  patient: IPatient;
}