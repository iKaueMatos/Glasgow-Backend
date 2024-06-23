import { CreateDoctorDTO } from "../../application/dtos/CreateDoctorDTO";
import { IDoctor } from "../../domain/entities/interfaces/IDoctor";

export interface IDoctorRepository {
  create(data: CreateDoctorDTO): Promise<IDoctor>;
}