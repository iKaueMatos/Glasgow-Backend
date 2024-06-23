import { IsNotEmpty, IsEmail, IsString, IsNumberString, Length } from 'class-validator';

export class CreateDoctorDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumberString()
  @Length(11, 11)
  cpf: string;

  @IsNotEmpty()
  @IsNumberString()
  crm: string;

  @IsNotEmpty()
  @IsString()
  specialty: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  uf: string;

  constructor(data: Partial<CreateDoctorDTO> = {}) {
    this.name = data.name || '';
    this.cpf = data.cpf || '';
    this.crm = data.crm || '';
    this.specialty = data.specialty || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.uf = data.uf || '';
  }
}
