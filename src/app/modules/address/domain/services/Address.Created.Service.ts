import { container } from "tsyringe";
import { IAddressCreatedService } from "../../application/services/IAddress.Created.Service";
import { IAddress } from "../entities/interfaces/IAddress";
import { AddressRepository } from "../../infra/repositories/AddressRepository";

export class AddressCreatedService implements IAddressCreatedService {
  async createAddress(data: IAddress): Promise<IAddress> {
    const addressRepository = container.resolve(AddressRepository);
    return addressRepository.createAddress(data);
  }
}