import { IAddress } from "../../../domain/model/IAddress";
import { AddressRepository } from "../../../infra/repositories/AddressRepository";
import { AddressService } from "../../../domain/service/AddressService";

export class DeleteAddressUseCase {
  private addressService: AddressService

  constructor() {
    const addressRepository = new AddressRepository();
    this.addressService = new AddressService(addressRepository)
  }
  
  async execute(addressId: number): Promise<void> {
    return this.addressService.deleteAddress(addressId);
  }
}