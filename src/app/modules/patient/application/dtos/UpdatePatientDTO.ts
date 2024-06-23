import { IAddress } from "../../../address/domain/model/IAddress";
import { IConsultation } from "../../../consultation/domain/model/IConsultation";
import { IDoctor } from "../../../doctor/domain/model/IDoctor";
import { IExam } from "../../../exam/domain/model/IExam";
import { IMeasurement } from "../../../measurement/domain/model/IMeasurement";
import { IPatientCondition } from "../../../patientCondition/domain/model/IPatientCondition";
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