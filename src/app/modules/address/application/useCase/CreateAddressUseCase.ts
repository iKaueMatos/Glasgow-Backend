import { IAddress } from "../../../models/IAddress";
import { AddressService } from "../../domain/service/addressService";
import { CreateAddressDTO } from "../dtos/CreatedAddressDTO";

export class CreateAddressUseCase {
  constructor(private addressService: AddressService) {}

  async execute(data: IAddress): Promise<CreateAddressDTO> {
    return this.addressService.createAddress(data);
  }
}