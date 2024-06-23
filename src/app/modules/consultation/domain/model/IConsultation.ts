import { IDoctor } from "../../../doctor/domain/model/IDoctor";
import { IPatient } from "../../../patient/domain/model/IPatient";

export interface IConsultation {
  id: number;
  patientId: number;
  doctorId: number;
  timestamp: Date;
  type: string;
  notes: string;
  patient: IPatient;
  doctor: IDoctor;
}