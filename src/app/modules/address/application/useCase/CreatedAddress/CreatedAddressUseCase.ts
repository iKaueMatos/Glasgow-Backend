import { IAddress } from "../../../../models/IAddress";
import { AddressRepository } from "../../../domain/repositories/AddressRepository";
import { AddressService } from "../../../domain/service/AddressService";
import { CreateAddressDTO } from "../../dtos/CreatedAddressDTO";

export class CreatedAddressUseCase {
  private addressService: AddressService

  constructor() {
    const addressRepository = new AddressRepository();
    this.addressService = new AddressService(addressRepository)
  }

  async execute(data: IAddress): Promise<CreateAddressDTO> {
    return this.addressService.createAddress(data);
  }
}