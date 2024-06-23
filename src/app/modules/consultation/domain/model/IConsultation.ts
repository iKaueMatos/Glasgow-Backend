import { IDoctor } from "../../../doctor/domain/entities/interfaces/IDoctor";
import { IPatient } from "../../../patient/domain/entities/interfaces/IPatient";

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