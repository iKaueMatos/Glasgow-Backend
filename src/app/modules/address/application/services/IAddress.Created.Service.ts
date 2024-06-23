import { IAddress } from "../../domain/entities/interfaces/IAddress";

export interface IAddressCreatedService {
  createAddress(data: IAddress): Promise<IAddress>;
}