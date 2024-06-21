import { Request, Response } from 'express';
import { IAddress } from '../../../../models/IAddress';
import { UpdateAddressUseCase } from './UpdateAddressUseCase';

export class UpdateAddressController {
  private updateAddressUseCase : UpdateAddressUseCase;

  constructor() {
    this.updateAddressUseCase = new UpdateAddressUseCase();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const data: IAddress = req.body;
    try {
      const numericId = Number(id);
      const address = await this.updateAddressUseCase.execute(numericId, data);
      return res.status(200).json(address);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}