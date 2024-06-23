import "reflect-metadata";
import { Router } from 'express';
import welcomeRouter from './shared/infra/http/welcome.routes';
import patientRouter from './modules/patient/interfaces/http/routes/patient.routes';
import addressRouter from './modules/address/interfaces/http/routes/address.routes';
import doctorRouter from './modules/doctor/interfaces/http/routes/doctor.routes';
import authRouter from './modules/user/interfaces/routes/auth.routes';
const router = Router();

router.use('/welcome', welcomeRouter);
router.use('/patient', patientRouter);
router.use('/patient/address', addressRouter);
router.use('/doctor/', doctorRouter);
router.use('/user/', authRouter)

export { router }
