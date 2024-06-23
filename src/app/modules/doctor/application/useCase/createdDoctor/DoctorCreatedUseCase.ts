import { container, inject, injectable } from "tsyringe";
import { CreateDoctorDTO } from "../../dtos/CreateDoctorDTO";
import { CustomException } from "../../../../../shared/exceptions/CustomException";
import { DoctorCreatedService } from "../../../domain/services/Doctor.Created.Service";
import { LoggerService } from "../../../../../core/services/Logger.Service";

@injectable()
export class DoctorCreatedUseCase {
  loggerService : LoggerService = new LoggerService();

  async execute(data: CreateDoctorDTO): Promise<void> {
    try {
      const doctorCreatedService = container.resolve(DoctorCreatedService)
      await doctorCreatedService.createDoctor(data);
    } catch (error: any) {
      throw new CustomException('Erro ao criar médico', 'Falha ao processar a requisição', String(error));
    }
  }
}