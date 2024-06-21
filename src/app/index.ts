import { Router } from 'express';
import welcomeRouter from './routes/WelcomeRouter';
import patientRouter from './modules/patient/interface/routes/PatientRouter';

const router = Router();

router.use('/welcome', welcomeRouter);
router.use('/patient', patientRouter);

export { router }
