import "reflect-metadata";
import { container } from 'tsyringe';
import { IDoctorRepository } from '../../../modules/doctor/infra/repository/IDoctorRepository';
import { DoctorRepository } from '../../../modules/doctor/infra/repository/DoctorRepository';
import { DoctorService } from '../../../modules/doctor/domain/service/Doctor.Service';
import { DoctorCreatedUseCase } from '../../../modules/doctor/application/useCase/createdDoctor/DoctorCreatedUseCase';
import { DoctorCreatedController } from "../../../modules/doctor/application/useCase/createdDoctor/DoctorCreatedController";
import { IPatientRepository } from "../../../modules/patient/infra/repository/IPatientRepository";
import { PatientRepository } from "../../../modules/patient/infra/repository/PatientRepository";
import { PatientService } from "../../../modules/patient/domain/services/Patient.Service";
import { CreatedPatientUseCase } from "../../../modules/patient/application/useCase/CreatedPatient/CreatedPatientUseCase";
import { CreatedPatientController } from "../../../modules/patient/application/useCase/CreatedPatient/CreatedPatientController";
import { IUserRepository } from "../../../modules/user/infra/infra/repository/IUserRepository";
import { UserRepository } from "../../../modules/user/infra/infra/repository/UserRepository";
import { AutheticateCreatedUserController } from "../../../modules/auth/application/useCases/createUser/AuthenticateCreatedUserController";
import { AutheticateUserUseCase } from "../../../modules/auth/application/useCases/createUser/AutheticateCreatedUserUseCase";
import { UserRepositoryToken } from "../../../modules/user/infra/infra/repository/UserRepositoryToken";

container.registerSingleton<IDoctorRepository>('DoctorRepository', DoctorRepository);
container.registerSingleton<DoctorService>('DoctorService', DoctorService);
container.registerSingleton<DoctorCreatedUseCase>('DoctorCreatedUseCase', DoctorCreatedUseCase);
container.registerSingleton<DoctorCreatedController>('DoctorCreatedController', DoctorCreatedController);

container.registerSingleton<IPatientRepository>('PatientRepository', PatientRepository);
container.registerSingleton<PatientService>('PatientService', PatientService);
container.registerSingleton<CreatedPatientUseCase>('CreatePatientUseCase', CreatedPatientUseCase);
container.registerSingleton<CreatedPatientController>('CreatePatientController', CreatedPatientController);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<UserRepositoryToken>('UserRepositoryToken', UserRepositoryToken);
container.registerSingleton<AutheticateCreatedUserController>('AutheticateCreatedUserController', AutheticateCreatedUserController);
container.registerSingleton<AutheticateUserUseCase>('AutheticateUserUseCase', AutheticateUserUseCase);
