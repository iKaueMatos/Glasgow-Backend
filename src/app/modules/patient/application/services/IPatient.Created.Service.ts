import { IPatient } from "../../domain/entities/interfaces/IPatient";
import { CreatePatientDTO } from "../dtos/CreatePatientDTO";

export interface IPatientServiceCreated {
  createPatient(data: CreatePatientDTO): Promise<IPatient>;
}