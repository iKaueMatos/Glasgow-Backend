import { Request, Response } from "express";
import { UpdatePatientDTO } from "../../dtos/UpdatePatientDTO";
import { UpdatePatientUseCase } from "./UpdatePatientUseCase";
import { ResponseDTO } from "../../../../../shared/dtos/ResponseDTO";

export class UpdatePatientController {
  private updatePatientUseCase: UpdatePatientUseCase;

  constructor() {
    this.updatePatientUseCase = new UpdatePatientUseCase();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const data: UpdatePatientDTO = req.body;
    const id: string = req.params.id;
    try {
      const patient = await this.updatePatientUseCase.execute(Number(id), data);
      const response = new ResponseDTO(true, 'Patient updated successfully', patient);
      return res.status(200).json(response);
    } catch (error: any) {
      const response = new ResponseDTO(false, error.message);
      return res.status(400).json(response);
    }
  }
}