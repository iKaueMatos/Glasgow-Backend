import { container } from "tsyringe";
import { IAddress } from "../../../domain/entities/interfaces/IAddress";
import { AddressFiltersService } from "../../../domain/services/Address.Filters.Service";

export class GetAddressByIdUseCase {
  async execute(addressId: number): Promise<IAddress | null> {
    const getByIdAddress = container.resolve(AddressFiltersService)
    return getByIdAddress.getAddressById(addressId);
  }
}