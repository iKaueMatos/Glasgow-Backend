import express, { Request, Response } from 'express';
import { AuthenticateUserController } from '../../../modules/auth/application/useCases/autheticateUser/AuthenticateUserController';
import { RefreshTokenController } from '../../../modules/auth/application/useCases/refleshToken/RefreshTokenController';
import { ResetPasswordUserController } from '../../../modules/auth/application/useCases/resetPasswordUser/ResetPasswordUserController';
import { SendForgotPasswordMailController } from '../../../modules/auth/application/useCases/sendForgotPasswordMail/SendForgotPasswordMailController';
import { AutheticateCreatedUserController } from '../../../modules/auth/application/useCases/createUser/AuthenticateCreatedUserController';

const router = express.Router();
const autheticateUserController = new AuthenticateUserController();
const refleshTokenController = new RefreshTokenController();
const resetPasswordController = new ResetPasswordUserController();
const sendForgotPasswordController = new SendForgotPasswordMailController();
const autheticateCreatedUserController = new AutheticateCreatedUserController();

router.post('/register', (req, res) => autheticateCreatedUserController.handle(req, res))
router.post('/login', (req, res) => autheticateUserController.handle(req, res));
router.post("/reset", (req, res) => resetPasswordController.handle(req, res));
router.post("/refresh-token", (req, res) => refleshTokenController.handle(req, res));
router.post("/forgot", (req, res) => sendForgotPasswordController.handle(req, res));

export default router