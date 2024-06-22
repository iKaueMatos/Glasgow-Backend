import { IAddress } from "../../domain/model/IAddress";
import prisma from "../prisma/client";
import { IAddressRepository } from "./IAddressRepository";

export class AddressRepository implements IAddressRepository {
  async createAddress(data: IAddress): Promise<IAddress> {
    return prisma.address.create({ data });
  }

  async findById(addressId: number): Promise<IAddress | null> {
    return prisma.address.findUnique({ where: { id: addressId } });
  }

  async findAll(): Promise<IAddress[]> {
    return prisma.address.findMany();
  }

  async updateAddress(addressId: number, data: IAddress): Promise<IAddress> {
    return prisma.address.update({ where: { id: addressId }, data });
  }

  async deleteAddress(addressId: number): Promise<IAddress> {
    return prisma.address.delete({ where: { id: addressId } });
  }
}