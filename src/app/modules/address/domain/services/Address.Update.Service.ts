import { container } from "tsyringe";
import { IAddressUpdateService } from "../../application/services/IAddress.Update.Service";
import { AddressRepository } from "../../infra/repositories/AddressRepository";
import { IAddress } from "../entities/interfaces/IAddress";
import { resolve } from 'path';

export class AddressUpdateService implements IAddressUpdateService {
  async updateAddress(addressId: number, data: IAddress): Promise<IAddress | null> {
    const addressRepository = container.resolve(AddressRepository);
    const existingAddress = await addressRepository.findById(addressId);
    if (!existingAddress) {
      throw new Error(`Address with id ${addressId} not found`);
    }
    const updatedAddress = { ...existingAddress, ...data };
    return await addressRepository.updateAddress(addressId, updatedAddress);
  }
}