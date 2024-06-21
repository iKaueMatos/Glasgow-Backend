import { Request, Response } from "express";
import { UpdatePatientDTO } from "../../dtos/UpdatePatientDTO";
import { UpdatePatientUseCase } from "./UpdatePatientUseCase";

export class UpdatePatientController {
  private updatePatientUseCase: UpdatePatientUseCase;

  constructor() {
    this.updatePatientUseCase = new UpdatePatientUseCase();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const data: UpdatePatientDTO = req.body;
    const id: string = req.params.id
    try {
      const patient = await this.updatePatientUseCase.execute(Number(id), data);
      return res.status(201).json(patient);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}