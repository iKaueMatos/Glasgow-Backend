import { IDoctor } from "../../../doctor/domain/model/IDoctor";
import { IAddress } from "../../../address/domain/model/IAddress";
import { IMeasurement } from "../../../measurement/domain/model/IMeasurement";
import { IExam } from "../../../models/IExam";
import { IPrescription } from "../../../prescription/domain/model/IPrescription";
import { Iinteraction } from "../../../Interaction/domain/model/Iinteraction";
import { IConsultation } from "../../../models/IConsultation";
import { INotification } from "../../../models/INotification";
import { IPatientCondition } from "./IPatientCondition";

export interface IPatient {
  id: number;
  name: string;
  cpf: string;
  dateOfBirth: Date;
  gender: string;
  email: string;
  phone: string;
  addressId: number;
  doctorId: number;
  address: IAddress;
  doctor: IDoctor;
  measurements: IMeasurement[];
  exams: IExam[];
  prescriptions: IPrescription[];
  interactions: Iinteraction[];
  consultations: IConsultation[];
  conditions: IPatientCondition[];
  notifications: INotification[];
}