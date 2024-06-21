import { IAddress } from "../../../models/IAddress";
import { AddressService } from "../../domain/service/AddressService";

export class GetAllAddressesUseCase {
  constructor(private addressService: AddressService) {}

  async execute(): Promise<IAddress[] | []> {
    return this.addressService.getAllAddresses();
  }
}