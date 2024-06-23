import { container } from "tsyringe";
import { CreateDoctorDTO } from "../../application/dtos/CreateDoctorDTO";
import { IDoctor } from "../model/IDoctor";
import { DoctorRepository } from "../../infra/repository/DoctorRepository";
import { LoggerService } from "../../../../core/services/Logger.Service";
import { CustomException } from "../../../../shared/exceptions/CustomException";

export class DoctorService {
  private loggerService: LoggerService = new LoggerService();

  async createDoctor(data: CreateDoctorDTO): Promise<IDoctor> {
    try {
      const cleanedCPF = data.cpf.replace(/\D/g, '');
      if (cleanedCPF.length !== 11) {
        throw new CustomException('Erro de validação', 'CPF deve conter exatamente 11 dígitos numéricos');
      }

      this.loggerService.info(`Criando médico com CPF: ${cleanedCPF}`);
      const doctorRepository = container.resolve(DoctorRepository);

      const doctor = await doctorRepository.create({
        ...data,
        cpf: cleanedCPF,
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
