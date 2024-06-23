import { container } from "tsyringe";
import { PatientServiceError } from "../../infra/exception/PatientException";
import { PatientRepository } from "../../infra/repository/PatientRepository";
import { UpdatePatientDTO } from "../../application/dtos/UpdatePatientDTO";
import { IPatient } from "../entities/interfaces/IPatient";
import { IPatientServiceUpdate } from "../../application/services/IPatient.Update.Service";

export class PatientUpdateService implements IPatientServiceUpdate {
  async updatePatient(patientId: number, data: UpdatePatientDTO): Promise<IPatient> {
    try {
      const patientRepository = container.resolve(PatientRepository);
      const updatedPatient = await patientRepository.updatePatient(patientId, data);
      return updatedPatient;
    } catch (error) {
      throw new PatientServiceError(`Erro ao atualizar o paciente: ${String(error)}`);
    }
  }
}