export interface IAddressDeleteService {
  deleteAddress(addressId: number): Promise<void>;
}