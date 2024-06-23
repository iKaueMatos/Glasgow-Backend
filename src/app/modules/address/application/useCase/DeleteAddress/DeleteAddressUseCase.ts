import { container } from "tsyringe";
import { AddressDeleteService } from "../../../domain/services/Address.Delete.Service";


export class DeleteAddressUseCase {  
  async execute(addressId: number): Promise<void> {
    const addressDeleteService = container.resolve(AddressDeleteService);
    return addressDeleteService.deleteAddress(addressId);
  }
}