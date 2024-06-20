import { IAddress } from "../../../models/IAddress";
import { AddressService } from "../../domain/service/addressService";

export class DeleteAddressUseCase {
  constructor(private addressService: AddressService) {}

  async execute(addressId: number): Promise<IAddress | null> {
    return this.addressService.deleteAddress(addressId);
  }
}