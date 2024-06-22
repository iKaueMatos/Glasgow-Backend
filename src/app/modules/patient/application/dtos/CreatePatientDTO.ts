import { IAddress } from "../../../address/domain/model/IAddress";
import { IDoctor } from "../../../doctor/domain/model/IDoctor";

export interface CreatePatientDTO {
  name: string;
  dateOfBirth: Date;
  cpf: string;
  gender: string;
  email: string;
  phone: string;
  address?: IAddress;
  doctorId: number;
}