import { Router } from 'express';
import welcomeRouter from './shared/infra/http/welcome.routes';
import patientRouter from './shared/infra/http/patient.routes';

const router = Router();

router.use('/welcome', welcomeRouter);
router.use('/patient', patientRouter);

export { router }
