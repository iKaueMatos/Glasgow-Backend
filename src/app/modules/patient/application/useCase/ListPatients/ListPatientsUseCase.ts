
import { container } from "tsyringe";
import { PatientFiltersService } from "../../../domain/services/Patient.Filters.Service";
import { IPatient } from "../../../domain/entities/interfaces/IPatient";

export class ListPatientsUseCase {
  async execute(): Promise<IPatient[]> {
    try {
      const patientFiltersService = container.resolve(PatientFiltersService);
      const patients = await patientFiltersService.findAll();
      return patients;
    } catch (error) {
      throw new Error('Ocorreu uma falha ao buscar pelos pacientes.');
    }
  }
}