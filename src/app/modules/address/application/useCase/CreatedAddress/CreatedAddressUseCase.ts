import { IAddress } from "../../../domain/model/IAddress";
import { AddressRepository } from "../../../infra/repositories/AddressRepository";
import { AddressService } from "../../../domain/service/Address.Service";
import { CreateAddressDTO } from "../../dtos/CreatedAddressDTO";

export class CreatedAddressUseCase {
  private addressService: AddressService

  constructor() {
    const addressRepository = new AddressRepository();
    this.addressService = new AddressService(addressRepository)
  }

  async execute(data: IAddress): Promise<CreateAddressDTO> {
    const createdAddress: CreateAddressDTO = await this.addressService.createAddress(data);
    return createdAddress;
  }
}