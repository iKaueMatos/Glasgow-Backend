import { IAddress } from "../../../models/IAddress";

export interface IAddressRepository {
  createAddress(data: IAddress): Promise<IAddress>;
  findById(addressId: number): Promise<IAddress | null>;
  findAll(): Promise<IAddress[]>;
  updateAddress(addressId: number, data: IAddress): Promise<IAddress>;
  deleteAddress(addressId: number): Promise<IAddress>;
}