import express, { Request, Response } from 'express';
import { UpdatePatientController } from '../controller/UpdatePatientController';
import { CreatedPatientController } from '../controller/CreatedPatientController';
import { ListPatientsController } from '../controller/PatientListController';

const router = express.Router();
const updatePatientController = new UpdatePatientController()
const createdPatientController = new CreatedPatientController();
const listPatientController = new ListPatientsController();

router.post('/created', (req: Request, res: Response) => createdPatientController.handle(req, res));
router.post('/update/:id', (req: Request, res: Response) => updatePatientController.handle(req, res));
router.get('/list', (req: Request, res: Response) => listPatientController.handle(req, res));

export default router;