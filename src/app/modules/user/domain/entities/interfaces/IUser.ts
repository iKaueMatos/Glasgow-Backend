import { IConsultation } from "../../../../consultation/domain/model/IConsultation";
import { IPatient } from "../../../../patient/domain/entities/interfaces/IPatient";
import { IUserToken } from "./IUserToken";

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  avatar: string | null;
  created_at: Date;
  phone?: string;
  patients?: IPatient[];
  consultations?: IConsultation[];
  userTokens?: IUserToken[];
}