import { CreateDoctorDTO } from "../../application/dtos/CreateDoctorDTO";
import { IDoctor } from "../../domain/model/IDoctor";

export interface IDoctorRepository {
  create(data: CreateDoctorDTO): Promise<IDoctor>;
}