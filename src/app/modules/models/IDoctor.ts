import { IConsultation } from "./IConsultation";
import { IPatient } from "./IPatient";

export interface IDoctor {
  id: number;
  name: string;
  specialty: string;
  email: string;
  phone: string;
  patients: IPatient[];
  consultations: IConsultation[];
}