import { IDoctor } from "../../domain/entities/interfaces/IDoctor";
import { CreateDoctorDTO } from "../dtos/CreateDoctorDTO";

export interface IDoctorCreatedService {
  createDoctor(data: CreateDoctorDTO): Promise<IDoctor>;
}