import { Request, Response } from "express";
import { IAddress } from "../../../domain/model/IAddress";
import { CreatedAddressUseCase } from "./CreatedAddressUseCase";
import { AddressRepository } from "../../../infra/repositories/AddressRepository";
import { ResponseDTO } from "../../../../../shared/dtos/ResponseDTO";

export class CreatedAddressController {
  private createdPatientUseCase: CreatedAddressUseCase

  constructor() {
    this.createdPatientUseCase = new CreatedAddressUseCase();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const addressData: IAddress = req.body;
    try {
      const address = await this.createdPatientUseCase.execute(addressData);
      const response = new ResponseDTO(true, 'Endereço Criado Com Sucesso!', address);
      return res.status(201).json(response);
    } catch (error: any) {
      const response = new ResponseDTO(false, error.message);
      return res.status(400).json(response);
    }
  }
}