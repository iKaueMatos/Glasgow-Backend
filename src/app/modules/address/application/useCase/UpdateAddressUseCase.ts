import { IAddress } from "../../../models/IAddress";
import { AddressService } from "../../domain/service/addressService";

export class UpdateAddressUseCase {
  constructor(private addressService: AddressService) {}

  async execute(addressId: number, data: IAddress): Promise<IAddress | null> {
    return this.addressService.updateAddress(addressId, data);
  }
}