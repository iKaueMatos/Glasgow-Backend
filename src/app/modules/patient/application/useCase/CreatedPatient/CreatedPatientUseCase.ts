import { IPatient } from "../../../../models/IPatient";
import { PatientRepository } from "../../../domain/repository/PatientRepository";
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