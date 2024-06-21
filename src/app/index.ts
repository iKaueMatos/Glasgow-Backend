import { Router } from 'express';
import welcomeRouter from './shared/infra/http/welcome.routes';
import patientRouter from './shared/infra/http/patient.routes';
import addressRouter from './shared/infra/http/address.routes';

const router = Router();

router.use('/welcome', welcomeRouter);
router.use('/patient', patientRouter);
router.use('/patient/address', addressRouter);

export { router }
