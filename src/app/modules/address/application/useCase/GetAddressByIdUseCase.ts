import { IAddress } from "../../../models/IAddress";
import { AddressService } from "../../domain/service/AddressService";

export class GetAddressByIdUseCase {
  constructor(private addressService: AddressService) {}

  async execute(addressId: number): Promise<IAddress | null> {
    return this.addressService.getAddressById(addressId);
  }
}