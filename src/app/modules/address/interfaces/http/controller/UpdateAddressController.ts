import { Request, Response } from 'express';
import { IAddress } from '../../../domain/entities/interfaces/IAddress';
import { container } from 'tsyringe';
import { UpdateAddressUseCase } from '../../../application/useCase/UpdateAddress/UpdateAddressUseCase';

export class UpdateAddressController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data: IAddress = req.body;
    try {
      const numericId = Number(id);
      const updateAddressUseCase = container.resolve(UpdateAddressUseCase)
      const address = await updateAddressUseCase.execute(numericId, data);
      return res.status(200).json(address);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}