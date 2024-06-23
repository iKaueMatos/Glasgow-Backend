import { Router } from 'express';
import { DeleteAddressController } from '../controller/DeleteAddressController';
import { GetAllAddressController } from '../controller/GetAllAddressController';
import { GetAddressByIdController } from '../controller/GetAddressByIdController';
import { CreatedAddressController } from '../controller/CreatedAddressController';
import { UpdateAddressController } from '../controller/UpdateAddressController';

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