import { IPatient } from "../../../../models/IPatient";
import { PatientRepository } from '../../../domain/repository/PatientRepository';
import { PatientService } from "../../../domain/services/PatientService";


export class ListPatientsUseCase {
  private patientService: PatientService;

  constructor() {
    const patientRepository = new PatientRepository();
    this.patientService = new PatientService(patientRepository);
  }

  async execute(): Promise<IPatient[]> {
    try {
      const patients = await this.patientService.findAll();
      return patients;
    } catch (error) {
      throw new Error('Ocorreu uma falha ao buscar pelos pacientes.');
    }
  }
}