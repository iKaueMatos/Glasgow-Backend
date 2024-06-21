import { Prisma } from "@prisma/client";
import { IPatient } from "../../../models/IPatient";
import { CreatePatientDTO } from "../../application/dtos/CreatePatientDTO";
import { UpdatePatientDTO } from "../../application/dtos/UpdatePatientDTO";
import prisma from "../../infra/prisma/client";

export class PatientRepository {
  async createPatient(data: CreatePatientDTO): Promise<IPatient> {
    const patient = await prisma.patient.create({
      data,
      include: {
        address: true,
        doctor: true,
      },
    });
    return patient as IPatient;
  }

  async findById(patientId: number): Promise<IPatient | null> {
    const patient = await prisma.patient.findUnique({
      where: { id: patientId },
      include: {
        address: true,
        doctor: true,
      },
    });
    return patient as IPatient | null;
  }

  async updatePatient(patientId: number, data: UpdatePatientDTO): Promise<any> {
    const existingPatient = await prisma.patient.findUnique({
      where: { id: patientId },
      include: {
        address: true,
        doctor: true,
        measurements: true,
        exams: true,
        prescriptions: true,
      }
    });
  
    if (!existingPatient) {
      throw new Error(`Patient with ID ${patientId} not found`);
    }
  
    const updateData: Prisma.PatientUpdateInput = {};
  
    if (data.name && data.name !== existingPatient.name) {
      updateData.name = data.name;
    }
    if (data.dateOfBirth && data.dateOfBirth !== existingPatient.dateOfBirth) {
      updateData.dateOfBirth = data.dateOfBirth;
    }
    if (data.gender && data.gender !== existingPatient.gender) {
      updateData.gender = data.gender;
    }
    if (data.email && data.email !== existingPatient.email) {
      updateData.email = data.email;
    }
    if (data.phone && data.phone !== existingPatient.phone) {
      updateData.phone = data.phone;
    }
  
    if (data.address) {
      const { street, city, state, postalCode, country } = data.address;
  
      if (
        street !== existingPatient.address?.street ||
        city !== existingPatient.address?.city ||
        state !== existingPatient.address?.state ||
        postalCode !== existingPatient.address?.postalCode ||
        country !== existingPatient.address?.country
      ) {
        updateData.address = {
          update: {
            street,
            city,
            state,
            postalCode,
            country,
          },
        };
      }
    }
  
    if (Object.keys(updateData).length === 0) {
      return existingPatient;
    }
  
    const updatedPatient = await prisma.patient.update({
      where: { id: patientId },
      data: updateData,
      include: {
        address: true,
        doctor: true,
        measurements: true,
        exams: true,
        prescriptions: true,
      },
    });
  
    return updatedPatient;
  }

  async findAll(): Promise<any[]> {
    try {
      const patients = await prisma.patient.findMany({
        include: {
          address: true,
          doctor: {
            include: {
              patients: true,
              consultations: true,
            },
          },
          measurements: true,
          exams: true,
          prescriptions: true,
          interactions: true,
          consultations: true,
          conditions: true,
          notifications: true,
        },
      });
      return patients;
    } catch (error) {
      console.error('Erro Ao Buscar Dados dos Pacientes!', error);
      throw new Error('Ocorreu um erro no servidor');
    }
  }
}