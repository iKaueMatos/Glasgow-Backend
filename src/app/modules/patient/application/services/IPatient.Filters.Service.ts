import { IPatient } from "../../domain/entities/interfaces/IPatient";

export interface IPatientFiltersService {
  getPatientById(patientId: number): Promise<IPatient | null>;
  findAll(): Promise<IPatient[]>;
}