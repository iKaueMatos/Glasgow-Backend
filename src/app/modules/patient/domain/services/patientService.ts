import { IPatient } from "../../../models/IPatient";
import { CreatePatientDTO } from "../../application/dtos/CreatePatientDTO";
import { UpdatePatientDTO } from "../../application/dtos/UpdatePatientDTO";
import { PatientServiceError } from "../../infra/exception/PatientException";
import prisma from "../../infra/prisma/client";
import { PatientRepository } from "../repository/PatientRepository";

export class PatientService {
  constructor(private patientRepository: PatientRepository) {}

  async createPatient(data: CreatePatientDTO): Promise<IPatient> {
    try {
      const patient = await this.patientRepository.createPatient(data);
      return patient;
    } catch (error) {
      throw new PatientServiceError(`Erro ao criar o Paciente!: ${String(error)}`);
    }
  }

  async updatePatient(patientId: number, data: UpdatePatientDTO): Promise<IPatient> {
    try {
      const updatedPatient = await this.patientRepository.updatePatient(patientId, data);
      return updatedPatient;
    } catch (error) {
      throw new PatientServiceError(`Erro ao atualizar o paciente: ${String(error)}`);
    }
  }

  async getPatientById(patientId: number): Promise<IPatient | null> {
    try {
      const patient = await this.patientRepository.findById(patientId);
      return patient;
    } catch (error) {
      throw new PatientServiceError(`Paciente não encontrado!: ${String(error)}`);
    }
  }
}