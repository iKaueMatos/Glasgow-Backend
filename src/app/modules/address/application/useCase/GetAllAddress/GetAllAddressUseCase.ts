import { IAddress } from "../../../domain/model/IAddress";
import { AddressRepository } from "../../../infra/repositories/AddressRepository";
import { AddressService } from "../../../domain/service/Address.Service";

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