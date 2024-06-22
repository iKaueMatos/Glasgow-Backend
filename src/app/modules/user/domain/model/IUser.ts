import { IConsultation } from "../../../consultation/domain/model/IConsultation";
import { IPatient } from "../../../patient/domain/model/IPatient";
import { IUserToken } from "./IUserToken";

export interface IUser {
  id: number;
  name: string;
  email?: string;
  password?: string;
  driverLicense?: string;
  isAdmin?: boolean;
  avatar?: string | undefined;
  created_at?: Date;
  
  patients?: IPatient[];
  consultations?: IConsultation[];
  userTokens?: IUserToken[];
}