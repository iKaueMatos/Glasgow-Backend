import { Request, Response } from "express";
import { CreatePatientDTO } from "../../application/dtos/CreatePatientDTO";
import { CreatePatientUseCase } from "../../application/useCase/CreatePatientUseCase";
import { UpdatePatientUseCase } from "../../application/useCase/UpdatePatientUseCase";
import { ListPatientsUseCase } from '../../application/useCase/ListPatientsUseCase';

export class PatientController {
  constructor(private createPatientUseCase: CreatePatientUseCase, private updatePatientUseCase: UpdatePatientUseCase, private listPatientsUseCase: ListPatientsUseCase) {}

  async create(req: Request, res: Response): Promise<Response> {
    const data: CreatePatientDTO = req.body;
    try {
      const patient = await this.createPatientUseCase.execute(data);
      return res.status(201).json(patient);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const data: CreatePatientDTO = req.body;
    const id: string = req.params.id
    try {
      const patient = await this.updatePatientUseCase.execute(Number(id), data);
      return res.status(201).json(patient);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async list(req: Request, res: Response): Promise<Response> {
    try {
      const patients = await this.listPatientsUseCase.execute();
      return res.status(200).json(patients);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}