import { format } from "date-fns";

export class PatientData {
  name: string;
  cpf: string;
  phone: string;
  dateOfBirth: Date;

  constructor(name: string, cpf: string, phone: string, dateOfBirth: Date) {
    this.name = name;
    this.cpf = this.cleanCPF(cpf);
    this.phone = this.cleanPhone(phone);
    this.dateOfBirth = this.parseDateOfBirth(dateOfBirth);
  }

  private cleanCPF(cpf: string): string {
    return cpf.replace(/\D/g, '');
  }

  private cleanPhone(phone: string): string {
    return phone.replace(/\D/g, '');
  }

  private parseDateOfBirth(dateOfBirth: Date): Date {
    const parsedDate = new Date(dateOfBirth);
    if (isNaN(parsedDate.getTime())) {
      throw new Error('Data de nascimento inválida');
    }
    return parsedDate;
  }

  getFormattedDateOfBirth(): string {
    return format(this.dateOfBirth, 'yyyy-MM-dd');
  }
}