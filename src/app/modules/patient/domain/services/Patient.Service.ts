import { IPatient } from "../model/IPatient";
import { CreatePatientDTO } from "../../application/dtos/CreatePatientDTO";
import { UpdatePatientDTO } from "../../application/dtos/UpdatePatientDTO";
import { PatientServiceError } from "../../infra/exception/PatientException";
import { PatientRepository } from "../../infra/repository/PatientRepository";
import { CustomException } from "../../../../shared/exceptions/CustomException";
import { container } from "tsyringe";
import { LoggerService } from '../../../../core/services/Logger.Service';
import { format } from 'date-fns';
import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";

export class PatientService {
  loggerService: LoggerService = new LoggerService();

  async createPatient(data: CreatePatientDTO): Promise<IPatient> {
    try {
      const cleanedCPF = data.cpf.replace(/\D/g, '');
      const cleanedPhone = data.phone.replace(/\D/g, '');
      const dateOfBirth = new Date(data.dateOfBirth);
      const formattedDateOfBirth = format(new Date(dateOfBirth), 'yyyy-MM-dd');

      this.loggerService.info(`Iniciando criação do paciente: ${data.name}`);

      const patientRepository = container.resolve(PatientRepository);
      const patient = await patientRepository.createPatient({
        ...data,
        cpf: cleanedCPF,
        phone: cleanedPhone,
        dateOfBirth: new Date(formattedDateOfBirth)
      });

      return patient;
    } catch (error) {
      throw new CustomException('Erro ao criar o Paciente!', String(error));
    }
  }

  async updatePatient(patientId: number, data: UpdatePatientDTO): Promise<IPatient> {
    try {
      const patientRepository = container.resolve(PatientRepository);
      const updatedPatient = await patientRepository.updatePatient(patientId, data);
      return updatedPatient;
    } catch (error) {
      throw new PatientServiceError(`Erro ao atualizar o paciente: ${String(error)}`);
    }
  }

  async getPatientById(patientId: number): Promise<IPatient | null> {
    try {
      const patientRepository = container.resolve(PatientRepository);
      const patient = await patientRepository.findById(patientId);
      return patient;
    } catch (error) {
      throw new PatientServiceError(`Paciente não encontrado!: ${String(error)}`);
    }
  }

  async findAll(): Promise<IPatient[]> {
    try {
      const patientRepository = container.resolve(PatientRepository);
      const patient = await patientRepository.findAll();
      return patient;
    } catch (error) {
      throw new PatientServiceError(`Pacientes não encontrados!: ${String(error)}`);
    }
  }
}