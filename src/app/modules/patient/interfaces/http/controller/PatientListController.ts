import { Request, Response } from "express";
import { ListPatientsUseCase } from "../../../application/useCase/ListPatients/ListPatientsUseCase";
import { ResponseDTO } from "../../../../../shared/dtos/ResponseDTO";
import { container } from "tsyringe";

export class ListPatientsController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const listPatientsUseCase = container.resolve(ListPatientsUseCase);
      const patients = await listPatientsUseCase.execute();
      const response = new ResponseDTO(true, 'Paciente Criado Com Sucesso!', patients);
      return res.status(200).json(response);
    } catch (error: any) {
      const response = new ResponseDTO(false, error.message);
      return res.status(400).json(response);
    }
  }
}