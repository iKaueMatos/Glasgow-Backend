import { Request, Response } from "express";
import { DeleteAddressUseCase } from "./DeleteAddressUseCase";

export class DeleteAddressController {
  private deleteAddressUseCase : DeleteAddressUseCase

  constructor() {
    this.deleteAddressUseCase = new DeleteAddressUseCase();
  }

  async handle(req: Request, res: Response): Promise<Response> {
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