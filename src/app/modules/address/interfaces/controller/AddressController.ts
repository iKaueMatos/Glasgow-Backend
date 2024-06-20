import { Request, Response } from 'express';
import { CreateAddressUseCase } from '../../application/useCase/CreateAddressUseCase';
import { GetAddressByIdUseCase } from '../../application/useCase/GetAddressByIdUseCase';
import { GetAllAddressesUseCase } from '../../application/useCase/GetAllAddressUseCase';
import { UpdateAddressUseCase } from '../../application/useCase/UpdateAddressUseCase';
import { DeleteAddressUseCase } from '../../application/useCase/DeleteAddressUseCase';
import { IAddress } from '../../../models/IAddress';

export class AddressController {
  constructor(
    private createAddressUseCase: CreateAddressUseCase,
    private getAddressByIdUseCase: GetAddressByIdUseCase,
    private getAllAddressesUseCase: GetAllAddressesUseCase,
    private updateAddressUseCase: UpdateAddressUseCase,
    private deleteAddressUseCase: DeleteAddressUseCase
  ) {}

  async create(req: Request, res: Response): Promise<Response> {
    const data: IAddress = req.body;
    try {
      const address = await this.createAddressUseCase.execute(data);
      return res.status(201).json(address);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const numericId = Number(id);
      const address = await this.getAddressByIdUseCase.execute(numericId);
      return address ? res.status(200).json(address) : res.status(404).json({ message: 'Endereço não encontrado!' });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const addresses = await this.getAllAddressesUseCase.execute();
      return res.status(200).json(addresses);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
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

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const numericId = Number(id);
      const address = await this.deleteAddressUseCase.execute(numericId);
      return res.status(200).json(address);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
