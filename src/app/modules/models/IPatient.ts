import { IDoctor } from "./IDoctor";
import { IAddress } from "./IAddress";
import { IMeasurement } from "./IMeasurement";
import { IExam } from "./IExam";
import { IPrescription } from "./IPrescription";
import { Iinteraction } from "./Iinteraction";
import { IConsultation } from "./IConsultation";
import { INotification } from "./INotification";
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

