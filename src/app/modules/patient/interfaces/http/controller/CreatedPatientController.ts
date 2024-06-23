import { Request, Response } from "express";
import { CreatePatientDTO } from "../../../application/dtos/CreatePatientDTO";
import { CreatedPatientUseCase } from "../../../application/useCase/CreatedPatient/CreatedPatientUseCase";
import { ResponseDTO } from "../../../../../shared/dtos/ResponseDTO";
import { LoggerService } from "../../../../../core/services/Logger.Service";
import { container } from "tsyringe";

export class CreatedPatientController {
  loggerService: LoggerService = new LoggerService();
  
  constructor() { }

  async handle(req: Request, res: Response): Promise<Response> {
    const data: CreatePatientDTO = req.body;
    try {
      const createPatientUseCase = container.resolve(CreatedPatientUseCase);
      const patient = await createPatientUseCase.execute(data);
      const response = new ResponseDTO(true, 'Paciente criado com sucesso!', patient);
      this.loggerService.info(`${response}`)
      return res.status(201).json(response);
    } catch (error: any) {
      this.loggerService.error(error)
      const response = new ResponseDTO(false, error.message);
      return res.status(400).json(response);
    }
  }
}