import { IPatient } from "../../../models/IPatient";
import { IPatientRepository } from "../../domain/repository/IPatientRepository";
import { PatientRepository } from "../../domain/repository/PatientRepository";

export class ListPatientsUseCase {
  constructor(private patientRepository: PatientRepository) {}

  async execute(): Promise<IPatient[]> {
    try {
      const patients = await this.patientRepository.findAll();
      return patients;
    } catch (error) {
      throw new Error('Failed to list patients');
    }
  }
}