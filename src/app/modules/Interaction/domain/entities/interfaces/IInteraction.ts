export interface Iinteraction {
  id?: number;
  patientId: number;
  question: string;
  answer?: string | undefined;
  timestamp?: Date;
  patient?: Partial<IPatient>;
}

export interface IPatient {
  id: number;
  name: string;
  cpf: string;
  dateOfBirth: Date;
  gender: string;
  email: string;
  phone: string;
  addressId: number;
  doctorId: number;
  userId: number | null;
}
