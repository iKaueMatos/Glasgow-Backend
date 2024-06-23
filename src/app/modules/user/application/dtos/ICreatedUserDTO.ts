export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
  avatar?: string;
  phone: string;
  id?: number;
}