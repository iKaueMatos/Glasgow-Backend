import { IPatient } from "../../../patient/domain/entities/interfaces/IPatient";

export interface IExam {
  id: number;
  patientId: number;
  type: string;
  result: string;
  examDate: Date;
  category: string;
  patient: IPatient;
}