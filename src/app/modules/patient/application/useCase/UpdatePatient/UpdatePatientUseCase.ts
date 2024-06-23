import { container } from 'tsyringe';
import { UpdatePatientDTO } from '../../dtos/UpdatePatientDTO';
import { PatientFiltersService } from '../../../domain/services/Patient.Filters.Service';
import { IPatient } from '../../../domain/entities/interfaces/IPatient';
import { PatientUpdateService } from '../../../domain/services/Patient.Update.Service';

export class UpdatePatientUseCase {
  async execute(patientId: number, data: UpdatePatientDTO): Promise<UpdatePatientDTO | null> {
    const patientFilterService = container.resolve(PatientFiltersService);
    const existingPatient = await patientFilterService.getPatientById(patientId);

    if (!existingPatient) {
      throw new Error(`paciente com id: ${patientId} não foi encontrado!`);
    }

    const patientDataToUpdate: Partial<IPatient> = {
      id: data.id ?? existingPatient.id,
      name: data.name ?? existingPatient.name,
      dateOfBirth: data.dateOfBirth ?? existingPatient.dateOfBirth,
      gender: data.gender ?? existingPatient.gender,
      email: data.email ?? existingPatient.email,
      phone: data.phone ?? existingPatient.phone,
      address: data.address ?? existingPatient.address,
    };

    const patientUpdateService = container.resolve(PatientUpdateService)
    return patientUpdateService.updatePatient(patientId, patientDataToUpdate);
  }
}