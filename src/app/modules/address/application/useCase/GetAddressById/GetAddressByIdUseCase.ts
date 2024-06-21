import { IAddress } from "../../../../models/IAddress";
import { AddressRepository } from "../../../domain/repositories/AddressRepository";
import { AddressService } from "../../../domain/service/AddressService";

export class GetAddressByIdUseCase {
  private addressService: AddressService

  constructor() {
    const addressRepository = new AddressRepository();
    this.addressService = new AddressService(addressRepository)
  }

  async execute(addressId: number): Promise<IAddress | null> {
    return this.addressService.getAddressById(addressId);
  }
}