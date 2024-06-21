import { Request, Response } from 'express';
import { GetAddressByIdUseCase } from './GetAddressByIdUseCase';

export class GetAddressByIdController {
  private getAddressByIdUseCase: GetAddressByIdUseCase

  constructor() {
    this.getAddressByIdUseCase = new GetAddressByIdUseCase();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const numericId = Number(id);
      const address = await this.getAddressByIdUseCase.execute(numericId);
      return address ? res.status(200).json(address) : res.status(404).json({ message: 'Endereço não encontrado!' });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}