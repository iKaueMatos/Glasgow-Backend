import { container, inject, injectable } from "tsyringe";
import { CreateDoctorDTO } from "../../dtos/CreateDoctorDTO";
import { CustomException } from "../../../../../shared/exceptions/CustomException";
import { DoctorService } from "../../../domain/service/Doctor.Service";
import { LoggerService } from "../../../../../core/services/Logger.Service";

@injectable()
export class DoctorCreatedUseCase {
  loggerService : LoggerService = new LoggerService();

  async execute(data: CreateDoctorDTO): Promise<void> {
    try {
      const doctorService = container.resolve(DoctorService)
      await doctorService.createDoctor(data);
    } catch (error: any) {
      throw new CustomException('Erro ao criar médico', 'Falha ao processar a requisição', String(error));
    }
  }
}