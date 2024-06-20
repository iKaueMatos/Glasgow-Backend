import { IAddress } from "../../../models/IAddress";
import { AddressService } from "../../domain/service/addressService";

export class GetAllAddressesUseCase {
  constructor(private addressService: AddressService) {}

  async execute(): Promise<IAddress[] | []> {
    return this.addressService.getAllAddresses();
  }
}