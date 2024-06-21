import { IAddress } from '../../../models/IAddress';
import { IPatient } from '../../../models/IPatient';
import { PatientRepository } from '../../domain/repository/PatientRepository';
import { PatientService } from '../../domain/services/PatientService';
import { UpdatePatientDTO } from '../dtos/UpdatePatientDTO';

export class UpdatePatientUseCase {
  patientService: PatientService = new PatientService(this.patientRepository);

  constructor(private patientRepository : PatientRepository ) {}

  async execute(patientId: number, data: UpdatePatientDTO): Promise<UpdatePatientDTO | null> {
    const existingPatient = await this.patientRepository.findById(patientId);

    if (!existingPatient) {
      throw new Error(`Patient with ID ${patientId} not found`);
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