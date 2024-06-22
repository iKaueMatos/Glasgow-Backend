import { IAddress } from '../../../../address/domain/model/IAddress';
import { IPatient } from '../../../domain/model/IPatient';
import { PatientRepository } from '../../../infra/repository/PatientRepository';
import { PatientService } from '../../../domain/services/PatientService';
import { UpdatePatientDTO } from '../../dtos/UpdatePatientDTO';

export class UpdatePatientUseCase {
  private patientService :  PatientService

  constructor() {
    const patientRepository : PatientRepository = new PatientRepository();
    this.patientService = new PatientService(patientRepository);
  }

  async execute(patientId: number, data: UpdatePatientDTO): Promise<UpdatePatientDTO | null> {
    const existingPatient = await this.patientService.getPatientById(patientId);

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

    return this.patientService.updatePatient(patientId, patientDataToUpdate);
  }
}