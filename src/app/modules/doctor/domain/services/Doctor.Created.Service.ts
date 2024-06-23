import { container } from "tsyringe";
import { CreateDoctorDTO } from "../../application/dtos/CreateDoctorDTO";
import { IDoctor } from "../entities/interfaces/IDoctor";
import { DoctorRepository } from "../../infra/repository/DoctorRepository";
import { LoggerService } from "../../../../core/services/Logger.Service";
import { CustomException } from "../../../../shared/exceptions/CustomException";
import { IDoctorCreatedService } from "../../application/services/IDoctor.Created.Service";
import { DoctorData } from "../values-objects/DoctorData";

export class DoctorCreatedService implements IDoctorCreatedService {
  private loggerService: LoggerService = new LoggerService();

  async createDoctor(data: CreateDoctorDTO): Promise<IDoctor> {
    try {
      const doctorData = new DoctorData(data);

      this.loggerService.info(`Criando médico com CPF: ${doctorData.cpf}`);
      const doctorRepository = container.resolve(DoctorRepository);

      const doctor = await doctorRepository.create({
        ...data,
        cpf: doctorData.cpf,
        crm: doctorData.crm,
        specialty: doctorData.specialty,
      });

      return doctor;
    } catch (error : any) {
      if (error instanceof CustomException) {
        this.loggerService.error(`Erro ao criar médico: ${error.message}`);
        throw error;
      } else {
        this.loggerService.error(`Erro interno ao criar médico: ${JSON.stringify(error.message)}`);
        throw new CustomException('Erro interno do servidor', 'Erro ao processar a requisição');
      }
    }
  }
}
