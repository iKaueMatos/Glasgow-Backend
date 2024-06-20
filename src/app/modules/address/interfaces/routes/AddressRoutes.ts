import { Router } from 'express';

import { CreateAddressUseCase } from '../../application/useCase/CreateAddressUseCase';
import { GetAddressByIdUseCase } from '../../application/useCase/GetAddressByIdUseCase';
import { GetAllAddressesUseCase } from '../../application/useCase/GetAllAddressUseCase';
import { UpdateAddressUseCase } from '../../application/useCase/UpdateAddressUseCase';
import { DeleteAddressUseCase } from '../../application/useCase/DeleteAddressUseCase';
import { AddressController } from '../controller/AddressController';
import { AddressRepository } from '../../domain/repositories/addressRepository';
import { AddressService } from '../../domain/service/addressService';


const addressRepository = new AddressRepository();
const addressService = new AddressService(addressRepository);
const createAddressUseCase = new CreateAddressUseCase(addressService);
const getAddressByIdUseCase = new GetAddressByIdUseCase(addressService);
const getAllAddressesUseCase = new GetAllAddressesUseCase(addressService);
const updateAddressUseCase = new UpdateAddressUseCase(addressService);
const deleteAddressUseCase = new DeleteAddressUseCase(addressService);

const addressController = new AddressController(
  createAddressUseCase,
  getAddressByIdUseCase,
  getAllAddressesUseCase,
  updateAddressUseCase,
  deleteAddressUseCase
);

const router = Router();

router.post('/addresses', (req, res) => addressController.create(req, res));
router.get('/addresses/:id', (req, res) => addressController.getById(req, res));
router.get('/addresses', (req, res) => addressController.getAll(req, res));
router.put('/addresses/:id', (req, res) => addressController.update(req, res));
router.delete('/addresses/:id', (req, res) => addressController.delete(req, res));

export default router;