import { IAddress } from '../../../../address/domain/model/IAddress';
import { IPatient } from '../../../domain/model/IPatient';
import { PatientRepository } from '../../../infra/repository/PatientRepository';
import { PatientService } from '../../../domain/services/Patient.Service';
import { UpdatePatientDTO } from '../../dtos/UpdatePatientDTO';
import { resolve } from 'path';
import { container } from 'tsyringe';

export class UpdatePatientUseCase {
  async execute(patientId: number, data: UpdatePatientDTO): Promise<UpdatePatientDTO | null> {
    const patientService = container.resolve(PatientService);
    const existingPatient = await patientService.getPatientById(patientId);

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

    return patientService.updatePatient(patientId, patientDataToUpdate);
  }
}