import { IAddress } from "../../../../models/IAddress";
import { AddressRepository } from "../../../domain/repositories/AddressRepository";
import { AddressService } from "../../../domain/service/AddressService";

export class GetAllAddressesUseCase {
  private addressService: AddressService

  constructor() {
    const addressRepository = new AddressRepository();
    this.addressService = new AddressService(addressRepository)
  }
  async execute(): Promise<IAddress[] | []> {
    return this.addressService.getAllAddresses();
  }
}