import { CreatePatientDTO } from "../../application/dtos/CreatePatientDTO";
import { IPatient } from "../entities/interfaces/IPatient";
import { container } from "tsyringe";
import { PatientRepository } from "../../infra/repository/PatientRepository";
import { CustomException } from "../../../../shared/exceptions/CustomException";
import { LoggerService } from "../../../../core/services/Logger.Service";
import { IPatientServiceCreated } from "../../application/services/IPatient.Created.Service";
import { PatientData } from "../values-objects/PatientData";

export class PatientCreatedService implements IPatientServiceCreated {
  loggerService : LoggerService = new LoggerService();

  async createPatient(data: CreatePatientDTO): Promise<IPatient> {
    try {
      const patientData = new PatientData(data.name, data.cpf, data.phone, data.dateOfBirth);
      this.loggerService.info(`Iniciando criação do paciente: ${patientData.name}`);
      const patientRepository = container.resolve(PatientRepository);
      
      const patient = await patientRepository.createPatient({
        ...data,
        cpf: patientData.cpf,
        phone: patientData.phone,
        dateOfBirth: patientData.dateOfBirth
      });

      return patient;
    } catch (error) {
      throw new CustomException('Erro ao criar o Paciente!', String(error));
    }
  }
}