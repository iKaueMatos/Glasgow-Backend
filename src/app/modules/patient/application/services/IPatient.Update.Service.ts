import { IPatient } from "../../domain/entities/interfaces/IPatient";
import { UpdatePatientDTO } from "../dtos/UpdatePatientDTO";

export interface IPatientServiceUpdate {
  updatePatient(patientId: number, data: UpdatePatientDTO): Promise<IPatient>;
}