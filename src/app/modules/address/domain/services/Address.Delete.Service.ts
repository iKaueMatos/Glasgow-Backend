import { container } from 'tsyringe';
import { IAddressDeleteService } from '../../application/services/IAddress.Delete.Service';
import { AddressRepository } from '../../infra/repositories/AddressRepository';

export class AddressDeleteService implements IAddressDeleteService {
  async deleteAddress(addressId: number): Promise<void> {
    const addressRepository = container.resolve(AddressRepository);
    const existingAddress = await addressRepository.findById(addressId);
    if (!existingAddress) {
      throw new Error(`Address with id ${addressId} not found`);
    }
    await addressRepository.deleteAddress(addressId);
  }
}