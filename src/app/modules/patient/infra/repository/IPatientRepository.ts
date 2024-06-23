import { IPatient } from "../../domain/entities/interfaces/IPatient";
import { CreatePatientDTO } from "../../application/dtos/CreatePatientDTO";
import { UpdatePatientDTO } from "../../application/dtos/UpdatePatientDTO";

export interface IPatientRepository {
  createPatient(data: CreatePatientDTO): Promise<IPatient>;
  findById(patientId: number): Promise<IPatient | null>;
  updatePatient(patientId: number, data: UpdatePatientDTO): Promise<any>;
  findAll(): Promise<IPatient[]>;
}