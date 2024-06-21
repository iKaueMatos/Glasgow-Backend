export interface CreatePatientDTO {
  name: string;
  dateOfBirth: Date;
  cpf: string,
  gender: string;
  email: string;
  phone: string;
  addressId: number;
  doctorId: number;
}