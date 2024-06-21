import { IAddress } from "../../../models/IAddress";
import { IConsultation } from "../../../models/IConsultation";
import { IDoctor } from "../../../models/IDoctor";
import { IExam } from "../../../models/IExam";
import { IMeasurement } from "../../../models/IMeasurement";
import { IPatientCondition } from "../../../models/IPatientCondition";
import { IPrescription } from "../../../models/IPrescription";

export interface UpdatePatientDTO {
  id?: number;
  name?: string;
  dateOfBirth?: Date;
  gender?: string;
  email?: string;
  phone?: string;
  cpf?: string;
  addressId?: number;
  doctorId?: number;
  address?: IAddress;
  doctor?: IDoctor;
  measurements?: IMeasurement[];
  exams?: IExam[];
  prescriptions?: IPrescription[];
  consultations?: IConsultation[];
  conditions?: IPatientCondition[];
}