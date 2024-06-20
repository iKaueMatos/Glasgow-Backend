export interface CreateAddressDTO {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country?: string;
}