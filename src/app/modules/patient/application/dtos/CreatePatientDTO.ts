import { IAddress } from "../../../address/domain/entities/interfaces/IAddress";
import { IDoctor } from "../../../doctor/domain/entities/interfaces/IDoctor";

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