import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetAllAddressesUseCase } from '../../../application/useCase/GetAllAddress/GetAllAddressUseCase';

export class GetAllAddressController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const getAllAddressUseCase = container.resolve(GetAllAddressesUseCase)
      const addresses = await getAllAddressUseCase.execute();
      return res.status(200).json(addresses);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}