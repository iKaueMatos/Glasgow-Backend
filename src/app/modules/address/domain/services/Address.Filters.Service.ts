import { container } from "tsyringe";
import { IAddressFiltersService } from "../../application/services/IAddress.Filters.Service";
import { IAddress } from "../entities/interfaces/IAddress";
import { AddressRepository } from "../../infra/repositories/AddressRepository";

export class AddressFiltersService implements IAddressFiltersService {
  async getAddressById(addressId: number): Promise<IAddress | null> {
    const addressRepository = container.resolve(AddressRepository);
    return addressRepository.findById(addressId);
  }

  async getAllAddresses(): Promise<IAddress[]> {
    const addressRepository = container.resolve(AddressRepository);
    return addressRepository.findAll();
  }
}