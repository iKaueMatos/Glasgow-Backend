import { injectable } from 'tsyringe';
import { IDoctorRepository } from './IDoctorRepository';
import { IDoctor } from '../../domain/model/IDoctor';
import { CreateDoctorDTO } from '../../application/dtos/CreateDoctorDTO';
import prisma from '../prisma/client';
import { LoggerService } from '../../../../core/services/Logger.Service';

@injectable()
export class DoctorRepository implements IDoctorRepository {
  loggerService : LoggerService = new LoggerService();

  async create(data: CreateDoctorDTO): Promise<IDoctor> {
    try {
      const { name, cpf, crm, specialty, email, phone, uf } = data;
      console.log(`Criando médico com nome: ${name}`);
      
      const doctor = await prisma.doctor.create({
        data: {
          name,
          cpf,
          crm,
          specialty,
          email,
          phone,
          uf,
        },
      });

      if (!doctor) {
        throw new Error('Falha ao criar médico');
      }

      console.log('Médico criado com sucesso:', doctor);

      return {
        ...doctor,
        patients: [],
        consultations: [],
      };
    } catch (error) {
      console.error('Erro ao criar médico:', error);
      throw new Error('Falha ao criar médico');
    }
  }
}
