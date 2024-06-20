import { IAddress } from "../../../models/IAddress";
import { AddressRepository } from "../repositories/addressRepository";

export class AddressService {
  constructor(private addressRepository: AddressRepository) {}

  async createAddress(data: IAddress): Promise<IAddress> {
    return this.addressRepository.createAddress(data);
  }

  async getAddressById(addressId: number): Promise<IAddress | null> {
    return this.addressRepository.findById(addressId);
  }

  async getAllAddresses(): Promise<IAddress[]> {
    return this.addressRepository.findAll();
  }

  async updateAddress(addressId: number, data: IAddress): Promise<IAddress> {
    return this.addressRepository.updateAddress(addressId, data);
  }

  async deleteAddress(addressId: number): Promise<IAddress> {
    return this.addressRepository.deleteAddress(addressId);
  }
}