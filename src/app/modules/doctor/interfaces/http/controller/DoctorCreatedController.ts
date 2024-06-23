import { Request, Response } from "express";
import { CreateDoctorDTO } from "../../../application/dtos/CreateDoctorDTO";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { CustomException } from "../../../../../shared/exceptions/CustomException";
import { DoctorCreatedUseCase } from '../../../application/useCase/createdDoctor/DoctorCreatedUseCase';
import { container } from "tsyringe";
import { LoggerService } from '../../../../../core/services/Logger.Service';

export class DoctorCreatedController {
  private loggerService: LoggerService = new LoggerService();

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, cpf, crm, specialty, email, phone, uf } = req.body;

      const createDoctorDTO: CreateDoctorDTO = {
        name,
        cpf,
        crm,
        specialty,
        email,
        phone,
        uf,
      };

      this.loggerService.info(`Solicitação recebida para criar médico: ${JSON.stringify(req.body)}`);
      const errors = await validate(createDoctorDTO);
      if (errors.length > 0) {
        throw new CustomException('Erro de validação', errors.toString());
      }

      const doctorCreatedUseCase = container.resolve(DoctorCreatedUseCase);
      const doctor = await doctorCreatedUseCase.execute(createDoctorDTO);

      return res.status(201).json(doctor);
    } catch (error) {
      if (error instanceof CustomException) {
        this.loggerService.error(`Erro ao Criar o medico: ${JSON.stringify(error.message)}`);
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}
