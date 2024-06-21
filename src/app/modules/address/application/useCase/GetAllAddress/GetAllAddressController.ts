import { Request, Response } from 'express';
import { GetAllAddressesUseCase } from './GetAllAddressUseCase';

export class GetAllAddressController {
  private getAllAddressUseCase : GetAllAddressesUseCase

  constructor() {
    this.getAllAddressUseCase = new GetAllAddressesUseCase()
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const addresses = await this.getAllAddressUseCase.execute();
      return res.status(200).json(addresses);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}