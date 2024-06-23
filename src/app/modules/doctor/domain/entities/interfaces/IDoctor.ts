import { IConsultation } from "../../../../consultation/domain/model/IConsultation";
import { IPatient } from "../../../../patient/domain/entities/interfaces/IPatient";

export interface IDoctor {
  id: number;
  name: string;
  cpf: string;
  crm: string;
  specialty: string;
  email: string;
  phone: string;
  uf: string;
  patients: IPatient[];
  consultations: IConsultation[];
}

