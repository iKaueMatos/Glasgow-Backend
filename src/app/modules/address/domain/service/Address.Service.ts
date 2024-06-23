import { IAddress } from "../model/IAddress";
import { AddressRepository } from "../../infra/repositories/AddressRepository";

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

  async updateAddress(addressId: number, data: IAddress): Promise<IAddress | null> {
    const existingAddress = await this.addressRepository.findById(addressId);
    if (!existingAddress) {
      throw new Error(`Address with id ${addressId} not found`);
    }
    const updatedAddress = { ...existingAddress, ...data };
    return await this.addressRepository.updateAddress(addressId, updatedAddress);
  }

  async deleteAddress(addressId: number): Promise<void> {
    const existingAddress = await this.addressRepository.findById(addressId);
    if (!existingAddress) {
      throw new Error(`Address with id ${addressId} not found`);
    }
    await this.addressRepository.deleteAddress(addressId);
  }
}