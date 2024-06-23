import { Request, Response } from "express";
import { DeleteAddressUseCase } from "../../../application/useCase/DeleteAddress/DeleteAddressUseCase";
import { container } from "tsyringe";

export class DeleteAddressController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const numericId = Number(id);
      const deleteAddressUseCase = container.resolve(DeleteAddressUseCase)
      const address = await deleteAddressUseCase.execute(numericId);
      return res.status(200).json(address);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}