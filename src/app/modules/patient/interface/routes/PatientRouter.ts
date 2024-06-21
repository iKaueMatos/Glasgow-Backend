import express, { Request, Response } from 'express';
import { PatientRepository } from '../../domain/repository/PatientRepository';
import { CreatePatientUseCase } from '../../application/useCase/CreatePatientUseCase';
import { PatientController } from '../controller/PatientController';
import { UpdatePatientUseCase } from '../../application/useCase/UpdatePatientUseCase';
import { ListPatientsUseCase } from '../../application/useCase/ListPatientsUseCase';

const router = express.Router();
const patientRepository = new PatientRepository();
const createPatientUseCase = new CreatePatientUseCase(patientRepository);
const updatePatientUseCase = new UpdatePatientUseCase(patientRepository);
const listPatientsUseCase = new ListPatientsUseCase(patientRepository);
const patientController = new PatientController(createPatientUseCase, updatePatientUseCase, listPatientsUseCase);

router.post('/created', (req: Request, res: Response) => patientController.create(req, res));
router.post('/update/:id', (req: Request, res: Response) => patientController.update(req, res));
router.get('/list', (req: Request, res: Response) => patientController.list(req, res));

export default router;