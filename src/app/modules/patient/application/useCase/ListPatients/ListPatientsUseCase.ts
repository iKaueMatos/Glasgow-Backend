import { IPatient } from "../../../domain/model/IPatient";
import { PatientRepository } from '../../../infra/repository/PatientRepository';
import { PatientService } from "../../../domain/services/Patient.Service";
import { resolve } from 'path';
import { container } from "tsyringe";


export class ListPatientsUseCase {
  async execute(): Promise<IPatient[]> {
    try {
      const patientService = container.resolve(PatientService);
      const patients = await patientService.findAll();
      return patients;
    } catch (error) {
      throw new Error('Ocorreu uma falha ao buscar pelos pacientes.');
    }
  }
}