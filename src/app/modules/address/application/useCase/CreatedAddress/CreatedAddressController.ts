import { Request, Response } from "express";
import { IAddress } from "../../../../models/IAddress";
import { CreatedAddressUseCase } from "./CreatedAddressUseCase";
import { AddressRepository } from "../../../domain/repositories/AddressRepository";

export class CreatedAddressController {
  private createdPatientUseCase: CreatedAddressUseCase

  constructor() {
    this.createdPatientUseCase = new CreatedAddressUseCase();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const data: IAddress = req.body;
    try {
      const address = await this.createdPatientUseCase.execute(data);
      return res.status(201).json(address);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}