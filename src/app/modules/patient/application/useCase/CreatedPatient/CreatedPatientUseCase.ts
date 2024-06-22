import { IPatient } from "../../../domain/model/IPatient";
import { PatientRepository } from "../../../infra/repository/PatientRepository";
import { PatientService } from "../../../domain/services/PatientService";
import { CreatePatientDTO } from "../../dtos/CreatePatientDTO";

export class CreatedPatientUseCase {
  private patientService: PatientService;

  constructor() {
    const patientRepository = new PatientRepository();
    this.patientService = new PatientService(patientRepository);
  }

  async execute(data: CreatePatientDTO): Promise<IPatient> {
    return this.patientService.createPatient(data);
  }
}