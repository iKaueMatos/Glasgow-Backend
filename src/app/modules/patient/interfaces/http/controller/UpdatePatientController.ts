import { Request, Response } from "express";
import { UpdatePatientDTO } from "../../../application/dtos/UpdatePatientDTO";
import { UpdatePatientUseCase } from "../../../application/useCase/UpdatePatient/UpdatePatientUseCase";
import { ResponseDTO } from "../../../../../shared/dtos/ResponseDTO";
import { container } from "tsyringe";

export class UpdatePatientController {
  async handle(req: Request, res: Response): Promise<Response> {
    const data: UpdatePatientDTO = req.body;
    const id: string = req.params.id;
    try {
      const updatePatientUseCase = container.resolve(UpdatePatientUseCase);
      const patient = await updatePatientUseCase.execute(Number(id), data);
      const response = new ResponseDTO(true, 'Paciente Atualizado Com Sucesso!', patient);
      return res.status(200).json(response);
    } catch (error: any) {
      const response = new ResponseDTO(false, error.message);
      return res.status(400).json(response);
    }
  }
}