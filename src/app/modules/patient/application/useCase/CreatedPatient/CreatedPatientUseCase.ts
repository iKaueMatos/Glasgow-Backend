import { IPatient } from "../../../domain/model/IPatient";
import { PatientRepository } from "../../../infra/repository/PatientRepository";
import { PatientService } from "../../../domain/services/Patient.Service";
import { CreatePatientDTO } from "../../dtos/CreatePatientDTO";
import { LoggerService } from "../../../../../core/services/Logger.Service";
import { container } from "tsyringe";

export class CreatedPatientUseCase {
  protected loggerService: LoggerService = new LoggerService();

  async execute(data: CreatePatientDTO): Promise<IPatient> {
    const patientService : PatientService = container.resolve(PatientService);
    return patientService.createPatient(data);
  }
}