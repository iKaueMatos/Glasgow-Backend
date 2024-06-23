import { IAddress } from "../../domain/entities/interfaces/IAddress";

export interface IAddressFiltersService {
  getAddressById(addressId: number): Promise<IAddress | null>;
  getAllAddresses(): Promise<IAddress[]>;
}