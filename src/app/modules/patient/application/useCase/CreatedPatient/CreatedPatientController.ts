import { Request, Response } from "express";
import { CreatePatientDTO } from "../../dtos/CreatePatientDTO";
import { CreatedPatientUseCase } from "./CreatedPatientUseCase";
import { PatientRepository } from '../../../infra/repository/PatientRepository';
import { PatientService } from "../../../domain/services/PatientService";
import { ResponseDTO } from "../../../../../shared/dtos/ResponseDTO";

export class CreatedPatientController {
  private createdPatientUseCase: CreatedPatientUseCase;

  constructor() {
    this.createdPatientUseCase = new CreatedPatientUseCase();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const data: CreatePatientDTO = req.body;
    try {
      const patient = await this.createdPatientUseCase.execute(data);
      const response = new ResponseDTO(true, 'Patient created successfully', patient);
      return res.status(201).json(response);
    } catch (error: any) {
      const response = new ResponseDTO(false, error.message);
      return res.status(400).json(response);
    }
  }
}