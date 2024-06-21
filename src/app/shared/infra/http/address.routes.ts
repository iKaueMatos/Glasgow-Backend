import { Router } from 'express';
import { UpdateAddressController } from '../../../modules/address/application/useCase/UpdateAddress/UpdateAddressController';
import { DeleteAddressController } from '../../../modules/address/application/useCase/DeleteAddress/DeleteAddressController';
import { GetAllAddressController } from '../../../modules/address/application/useCase/GetAllAddress/GetAllAddressController';
import { GetAddressByIdController } from '../../../modules/address/application/useCase/GetAddressById/GetAddressByIdController';
import { CreatedAddressController } from '../../../modules/address/application/useCase/CreatedAddress/CreatedAddressController';

const router = Router();

const updateAddressController = new UpdateAddressController();
const deleteAddressController = new DeleteAddressController();
const getAllAddressController = new GetAllAddressController();
const getAddressByIdController = new GetAddressByIdController();
const createdAddressController = new CreatedAddressController();

router.post('/create', (req, res) => createdAddressController.handle(req, res));
router.put('/update/:id', (req, res) => updateAddressController.handle(req, res));
router.get('/getId/:id', (req, res) => getAddressByIdController.handle(req, res));
router.get('/getAll', (req, res) => getAllAddressController.handle(req, res));
router.delete('/delete/:id', (req, res) => deleteAddressController.handle(req, res));

export default router;