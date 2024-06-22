import { IAddress } from "../../../address/domain/model/IAddress";
import { IConsultation } from "../../../models/IConsultation";
import { IDoctor } from "../../../doctor/domain/model/IDoctor";
import { IExam } from "../../../models/IExam";
import { IMeasurement } from "../../../measurement/domain/model/IMeasurement";
import { IPatientCondition } from "../../../models/IPatientCondition";
import { IPrescription } from "../../../prescription/domain/model/IPrescription";

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