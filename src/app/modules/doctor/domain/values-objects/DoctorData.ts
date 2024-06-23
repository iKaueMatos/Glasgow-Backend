import { CustomException } from "../../../../shared/exceptions/CustomException";
import { CreateDoctorDTO } from "../../application/dtos/CreateDoctorDTO";

export class DoctorData {
  name: string = '';
  cpf: string = '';
  crm: string = '';
  specialty: string = '';

  constructor(data: CreateDoctorDTO) {
    this.validateAndTransform(data);
  }

  private validateAndTransform(data: CreateDoctorDTO): void {
    this.name = this.validateName(data.name);
    this.cpf = this.validateCPF(data.cpf);
    this.crm = this.validateCRM(data.crm);
    this.specialty = this.validateSpecialty(data.specialty);
  }

  private validateName(name: string): string {
    if (!name || name.trim() === '') {
      throw new CustomException('Erro de validação', 'Nome do médico é obrigatório');
    }
    return name.trim();
  }

  private validateCPF(cpf: string): string {
    const cleanedCPF = cpf.replace(/\D/g, '');
    if (cleanedCPF.length !== 11) {
      throw new CustomException('Erro de validação', 'CPF deve conter exatamente 11 dígitos numéricos');
    }
    return cleanedCPF;
  }

  private validateCRM(crm: string): string {
    return crm.trim();
  }

  private validateSpecialty(specialty: string): string {
    return specialty.trim();
  }
}