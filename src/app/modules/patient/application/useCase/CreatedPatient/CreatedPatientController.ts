import { Request, Response } from "express";
import { CreatePatientDTO } from "../../dtos/CreatePatientDTO";
import { CreatedPatientUseCase } from "./CreatedPatientUseCase";
import { PatientRepository } from '../../../infra/repository/PatientRepository';
import { PatientService } from "../../../domain/services/Patient.Service";
import { ResponseDTO } from "../../../../../shared/dtos/ResponseDTO";
import { LoggerService } from "../../../../../core/services/Logger.Service";

export class CreatedPatientController {
  createdPatientUseCase: CreatedPatientUseCase = new CreatedPatientUseCase();
  loggerService: LoggerService = new LoggerService();
  
  constructor() { }

  async handle(req: Request, res: Response): Promise<Response> {
    const data: CreatePatientDTO = req.body;
    try {
      const patient = await this.createdPatientUseCase.execute(data);
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