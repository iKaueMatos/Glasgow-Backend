import { IAddress } from "../../../domain/model/IAddress";
import { AddressRepository } from "../../../infra/repositories/AddressRepository";
import { AddressService } from "../../../domain/service/AddressService";

export class UpdateAddressUseCase {
  private addressService: AddressService

  constructor() {
    const addressRepository = new AddressRepository();
    this.addressService = new AddressService(addressRepository)
  }
  
  async execute(addressId: number, data: IAddress): Promise<IAddress | null> {
    return this.addressService.updateAddress(addressId, data);
  }
}