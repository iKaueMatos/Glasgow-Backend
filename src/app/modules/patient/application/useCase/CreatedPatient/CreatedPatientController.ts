import { Request, Response } from "express";
import { CreatePatientDTO } from "../../dtos/CreatePatientDTO";
import { CreatedPatientUseCase } from "./CreatedPatientUseCase";
import { PatientRepository } from '../../../domain/repository/PatientRepository';
import { PatientService } from "../../../domain/services/PatientService";

export class CreatedPatientController {
  private createdPatientUseCase: CreatedPatientUseCase;

  constructor() {
    this.createdPatientUseCase = new CreatedPatientUseCase();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const data: CreatePatientDTO = req.body;
    try {
      const patient = await this.createdPatientUseCase.execute(data);
      return res.status(201).json(patient);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}