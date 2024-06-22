interface AddressCreateInput {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface PatientCreateInput {
  name: string;
  cpf: string;
  dateOfBirth: Date;
  gender: string;
  email: string;
  phone: string;
  address?: {
    create: AddressCreateInput;
  } | null;
  doctorId?: number | null;
}

export default PatientCreateInput;