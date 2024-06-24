import "reflect-metadata";
import { container } from 'tsyringe';

import { IDoctorRepository } from '../../../modules/doctor/infra/repository/IDoctorRepository';
import { DoctorRepository } from '../../../modules/doctor/infra/repository/DoctorRepository';
import { DoctorCreatedUseCase } from '../../../modules/doctor/application/useCase/createdDoctor/DoctorCreatedUseCase';
import { IPatientRepository } from "../../../modules/patient/infra/repository/IPatientRepository";
import { PatientRepository } from "../../../modules/patient/infra/repository/PatientRepository";
import { CreatedPatientUseCase } from "../../../modules/patient/application/useCase/CreatedPatient/CreatedPatientUseCase";
import { IUserRepository } from "../../../modules/user/infra/repository/IUserRepository";
import { UserRepository } from "../../../modules/user/infra/repository/UserRepository";
import { UserCreatedUseCase } from "../../../modules/user/application/useCases/userCreated/UserCreatedUseCase";
import { UserRepositoryToken } from "../../../modules/user/infra/repository/UserRepositoryToken";
import { IPatientServiceCreated } from "../../../modules/patient/application/services/IPatient.Created.Service";
import { PatientCreatedService } from "../../../modules/patient/domain/services/Patient.Created.Service";
import { IPatientFiltersService } from "../../../modules/patient/application/services/IPatient.Filters.Service";
import { PatientFiltersService } from "../../../modules/patient/domain/services/Patient.Filters.Service";
import { IPatientServiceUpdate } from "../../../modules/patient/application/services/IPatient.Update.Service";
import { PatientUpdateService } from "../../../modules/patient/domain/services/Patient.Update.Service";
import { AddressUpdateService } from "../../../modules/address/domain/services/Address.Update.Service";
import { IAddressUpdateService } from "../../../modules/address/application/services/IAddress.Update.Service";
import { IAddressCreatedService } from "../../../modules/address/application/services/IAddress.Created.Service";
import { AddressCreatedService } from '../../../modules/address/domain/services/Address.Created.Service';
import { IAddressDeleteService } from "../../../modules/address/application/services/IAddress.Delete.Service";
import { AddressDeleteService } from "../../../modules/address/domain/services/Address.Delete.Service";
import { IAddressFiltersService } from "../../../modules/address/application/services/IAddress.Filters.Service";
import { AddressFiltersService } from "../../../modules/address/domain/services/Address.Filters.Service";
import { AddressRepository } from "../../../modules/address/infra/repositories/AddressRepository";
import { IAddressRepository } from "../../../modules/address/infra/repositories/IAddressRepository";
import { IUserRepositoryToken } from "../../../modules/user/infra/repository/IUserRepositoryToken";
import { IAuthAutheticateUserService } from "../../../modules/user/application/services/IAuthAutheticateUser.Service";
import { AuthAuthenticateUserService } from "../../../modules/user/domain/services/AuthAutheticateUser.Service";
import { IAuthResetPasswordService } from "../../../modules/user/application/services/IAuthResetPassword.Service";
import { AuthResetPasswordService } from "../../../modules/user/domain/services/AuthResetPassword.Service";
import { UserCreatedService } from "../../../modules/user/domain/services/User.Service";
import { UpdatePatientUseCase } from "../../../modules/patient/application/useCase/UpdatePatient/UpdatePatientUseCase";
import { ListPatientsUseCase } from "../../../modules/patient/application/useCase/ListPatients/ListPatientsUseCase";
import { AuthServiceSendForgotPassword } from "../../../modules/user/domain/services/AuthSendForgotPassword.Service";
import { RefreshTokenUseCase } from "../../../modules/user/application/useCases/refleshToken/RefreshTokenUseCase";
import { DeleteAddressUseCase } from "../../../modules/address/application/useCase/DeleteAddress/DeleteAddressUseCase";
import { GetAddressByIdUseCase } from "../../../modules/address/application/useCase/GetAddressById/GetAddressByIdUseCase";
import { CreatedAddressUseCase } from "../../../modules/address/application/useCase/CreatedAddress/CreatedAddressUseCase";
import { GetAllAddressesUseCase } from "../../../modules/address/application/useCase/GetAllAddress/GetAllAddressUseCase";
import { IDoctorCreatedService } from "../../../modules/doctor/application/services/IDoctor.Created.Service";
import { DoctorCreatedService } from "../../../modules/doctor/domain/services/Doctor.Created.Service";
import { IChatGptService } from "../../../modules/chatgpt/application/service/IChatGPT.Service";
import { ChatGptService } from "../../../modules/chatgpt/domain/service/ChatGPT.Service";
import { ChatGptUseCase } from "../../../modules/chatgpt/application/useCases/ChatGPTUsecase";

container.registerSingleton<IDoctorRepository>('DoctorRepository', DoctorRepository);
container.registerSingleton<DoctorCreatedUseCase>('DoctorCreatedUseCase', DoctorCreatedUseCase);
container.registerSingleton<IDoctorCreatedService>('DoctorCreatedService', DoctorCreatedService);

container.registerSingleton<IPatientRepository>('PatientRepository', PatientRepository);
container.registerSingleton<IPatientServiceCreated>('PatientServiceCreated', PatientCreatedService);
container.registerSingleton<IPatientFiltersService>('PatientFiltersService', PatientFiltersService);
container.registerSingleton<IPatientServiceUpdate>('PatientUpdateServce', PatientUpdateService);

container.registerSingleton<CreatedPatientUseCase>('CreatePatientUseCase', CreatedPatientUseCase);
container.registerSingleton<UpdatePatientUseCase>('UpdatePatientUseCase', UpdatePatientUseCase);
container.registerSingleton<ListPatientsUseCase>('ListPatientsUseCase', ListPatientsUseCase);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IUserRepositoryToken>('UserRepositoryToken', UserRepositoryToken);
container.registerSingleton<UserCreatedService>('UserCreatedService', UserCreatedService);
container.registerSingleton<UserCreatedUseCase>('UserCreatedUseCase', UserCreatedUseCase);

container.registerSingleton<IAuthAutheticateUserService>('AuthAuthenticateUserService',AuthAuthenticateUserService);
container.registerSingleton<IAuthResetPasswordService>('IAuthResetPasswordService', AuthResetPasswordService)
container.registerSingleton<AuthServiceSendForgotPassword>('AuthServiceSendForgotPassword', AuthServiceSendForgotPassword);
container.registerSingleton<RefreshTokenUseCase>('RefreshTokenUseCase', RefreshTokenUseCase);

container.registerSingleton<IAddressUpdateService>('AddressUpdateService', AddressUpdateService);
container.registerSingleton<IAddressCreatedService>('AddressCreatedService', AddressCreatedService);
container.registerSingleton<IAddressDeleteService>('AddressDeleteService', AddressDeleteService);
container.registerSingleton<IAddressFiltersService>('AddressFiltersService', AddressFiltersService);
container.registerSingleton<IAddressRepository>('AddressRepository', AddressRepository);
container.registerSingleton<DeleteAddressUseCase>('DeleteAddressUseCase', DeleteAddressUseCase);
container.registerSingleton<GetAddressByIdUseCase>('GetAddressByIdUseCase', GetAddressByIdUseCase);
container.registerSingleton<CreatedAddressUseCase>('CreatedAddressUseCase', CreatedAddressUseCase);
container.registerSingleton<GetAllAddressesUseCase>('GetAllAddressesUseCase', GetAllAddressesUseCase);


container.registerSingleton<IChatGptService>('ChatGptService', ChatGptService);
container.registerSingleton<ChatGptUseCase>('ChatGptUseCase', ChatGptUseCase);
