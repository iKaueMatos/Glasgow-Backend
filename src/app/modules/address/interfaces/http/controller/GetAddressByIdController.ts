import { Request, Response } from 'express';
import { GetAddressByIdUseCase } from '../../../application/useCase/GetAddressById/GetAddressByIdUseCase';
import { container } from 'tsyringe';

export class GetAddressByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const numericId = Number(id);
      const getAddressByIdUseCase = container.resolve(GetAddressByIdUseCase)
      const address = await getAddressByIdUseCase.execute(numericId);
      return address ? res.status(200).json(address) : res.status(404).json({ message: 'Endereço não encontrado!' });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}