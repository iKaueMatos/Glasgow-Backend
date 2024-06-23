import { container } from "tsyringe";
import { IAddress } from "../../../domain/entities/interfaces/IAddress";
import { AddressRepository } from "../../../infra/repositories/AddressRepository";
import { AddressUpdateService } from "../../../domain/services/Address.Update.Service";

export class UpdateAddressUseCase {
  async execute(addressId: number, data: IAddress): Promise<IAddress | null> {
    const updateAddressService = container.resolve(AddressUpdateService)
    return updateAddressService.updateAddress(addressId, data);
  }
}