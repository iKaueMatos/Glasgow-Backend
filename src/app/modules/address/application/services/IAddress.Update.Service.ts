import { IAddress } from "../../domain/entities/interfaces/IAddress";

export interface IAddressUpdateService {
  updateAddress(addressId: number, data: IAddress): Promise<IAddress | null>;
}