import { Request, Response } from "express";
import { ListPatientsUseCase } from "./ListPatientsUseCase";

export class ListPatientsController {
  private listPatientsUseCase: ListPatientsUseCase

  constructor() {
    this.listPatientsUseCase = new ListPatientsUseCase();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const patients = await this.listPatientsUseCase.execute();
      return res.status(200).json(patients);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}