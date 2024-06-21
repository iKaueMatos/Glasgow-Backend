import { PatientRepository } from "../../domain/repository/PatientRepository";
import { IPatient } from "../../../models/IPatient";
import { CreatePatientDTO } from "../dtos/CreatePatientDTO";

export class CreatePatientUseCase {
  constructor(private patientRepository: PatientRepository) {}

  async execute(data: CreatePatientDTO): Promise<IPatient> {
    return this.patientRepository.createPatient(data);
  }
}