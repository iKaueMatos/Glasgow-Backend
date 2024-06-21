export class PatientServiceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PatientServiceError';
  }
}