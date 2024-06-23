import { IAddress } from "../../../domain/entities/interfaces/IAddress";
import { AddressCreatedService } from "../../../domain/services/Address.Created.Service";
import { CreateAddressDTO } from "../../dtos/CreatedAddressDTO";
import { container } from "tsyringe";

export class CreatedAddressUseCase {
  async execute(data: IAddress): Promise<CreateAddressDTO> {
    const addressCreatedService = container.resolve(AddressCreatedService);
    const createdAddress: CreateAddressDTO = await addressCreatedService.createAddress(data);
    return createdAddress;
  }
}