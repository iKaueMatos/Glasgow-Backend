import { IAddress } from "../../../../address/domain/entities/interfaces/IAddress";
import { IConsultation } from "../../../../consultation/domain/model/IConsultation";
import { IDoctor } from "../../../../doctor/domain/entities/interfaces/IDoctor";
import { IExam } from "../../../../exam/domain/model/IExam";
import { Iinteraction } from "../../../../Interaction/domain/model/Iinteraction";
import { IMeasurement } from "../../../../measurement/domain/model/IMeasurement";
import { INotification } from "../../../../notification/domain/model/INotification";
import { IPatientCondition } from "../../../../patientCondition/domain/model/IPatientCondition";
import { IPrescription } from "../../../../prescription/domain/model/IPrescription";


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