import { container } from "tsyringe";
import { PatientRepository } from "../../infra/repository/PatientRepository";
import { PatientServiceError } from "../../infra/exception/PatientException";
import { IPatientFiltersService } from "../../application/services/IPatient.Filters.Service";
import { IPatient } from "../entities/interfaces/IPatient";

export class PatientFiltersService implements IPatientFiltersService {
  async getPatientById(patientId: number): Promise<IPatient | null> {
    try {
      const patientRepository = container.resolve(PatientRepository);
      const patient = await patientRepository.findById(patientId);
      return patient;
    } catch (error) {
      throw new PatientServiceError(`Paciente não encontrado!: ${String(error)}`);
    }
  }

  async findAll(): Promise<IPatient[]> {
    try {
      const patientRepository = container.resolve(PatientRepository);
      const patient = await patientRepository.findAll();
      return patient;
    } catch (error) {
      throw new PatientServiceError(`Pacientes não encontrados!: ${String(error)}`);
    }
  }
}