import { container } from "tsyringe";
import { IAddress } from "../../../domain/entities/interfaces/IAddress";
import { AddressFiltersService } from "../../../domain/services/Address.Filters.Service";

export class GetAllAddressesUseCase {
  async execute(): Promise<IAddress[] | []> {
    const getByAllAddress = container.resolve(AddressFiltersService)
    return getByAllAddress.getAllAddresses();
  }
}