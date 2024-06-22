import { Request, Response } from "express";
import { ListPatientsUseCase } from "./ListPatientsUseCase";
import { ResponseDTO } from "../../../../../shared/dtos/ResponseDTO";

export class ListPatientsController {
  private listPatientsUseCase: ListPatientsUseCase

  constructor() {
    this.listPatientsUseCase = new ListPatientsUseCase();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const patients = await this.listPatientsUseCase.execute();
      const response = new ResponseDTO(true, 'Patients retrieved successfully', patients);
      return res.status(200).json(response);
    } catch (error: any) {
      const response = new ResponseDTO(false, error.message);
      return res.status(400).json(response);
    }
  }
}