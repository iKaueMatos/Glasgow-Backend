import { IPatient } from "../../../domain/entities/interfaces/IPatient";
import { CreatePatientDTO } from "../../dtos/CreatePatientDTO";
import { LoggerService } from "../../../../../core/services/Logger.Service";
import { container } from "tsyringe";
import { PatientCreatedService } from "../../../domain/services/Patient.Created.Service";

export class CreatedPatientUseCase {
  protected loggerService: LoggerService = new LoggerService();

  async execute(data: CreatePatientDTO): Promise<IPatient> {
    const patientService = container.resolve(PatientCreatedService);
    return patientService.createPatient(data);
  }
}