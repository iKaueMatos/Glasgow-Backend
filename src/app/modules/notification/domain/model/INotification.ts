import { IPatient } from "../../../patient/domain/model/IPatient";

export interface INotification {
  id: number;
  patientId: number;
  type: string;
  message: string;
  timestamp: Date;
  patient: IPatient;
}