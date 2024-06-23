import { Request, Response } from "express";
import { IAddress } from "../../../domain/entities/interfaces/IAddress";
import { CreatedAddressUseCase } from "../../../application/useCase/CreatedAddress/CreatedAddressUseCase";
import { ResponseDTO } from "../../../../../shared/dtos/ResponseDTO";
import { container } from "tsyringe";

export class CreatedAddressController {
  async handle(req: Request, res: Response): Promise<Response> {
    const addressData: IAddress = req.body;
    try {
      const createdPatientUseCase = container.resolve(CreatedAddressUseCase)
      const address = await createdPatientUseCase.execute(addressData);
      const response = new ResponseDTO(true, 'Endereço Criado Com Sucesso!', address);
      return res.status(201).json(response);
    } catch (error: any) {
      const response = new ResponseDTO(false, error.message);
      return res.status(400).json(response);
    }
  }
}