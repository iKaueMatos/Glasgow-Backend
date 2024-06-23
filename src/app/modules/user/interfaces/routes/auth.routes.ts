import express, { Request, Response } from 'express';
import { AuthenticateUserController } from '../controller/AuthenticateUserController';
import { RefreshTokenController } from '../controller/RefreshTokenController';
import { ResetPasswordUserController } from '../controller/ResetPasswordUserController';
import { UserCreatedController } from '../controller/UserCreatedController';
import authMiddleware from '../middleware/EnsureAutheticateMiddleware';
import { SendForgotPasswordMailController } from '../../application/useCases/sendForgotPasswordMail/SendForgotPasswordMailController';

const router = express.Router();
const autheticateUserController = new AuthenticateUserController();
const refleshTokenController = new RefreshTokenController();
const resetPasswordController = new ResetPasswordUserController();
const sendForgotPasswordController = new SendForgotPasswordMailController();
const userCreatedController = new UserCreatedController();

router.post('/register', (req, res) => userCreatedController.handle(req, res));
router.post('/login', (req, res) => autheticateUserController.handle(req, res));
router.post('/forgot', (req, res) => sendForgotPasswordController.handle(req, res));

router.use(authMiddleware);

router.post('/reset', (req, res) => resetPasswordController.handle(req, res));
router.post('/refresh-token', (req, res) => refleshTokenController.handle(req, res));

export default router;
