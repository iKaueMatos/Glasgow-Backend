import express from 'express';
import { ChatGptController } from '../controller/ChatGptController';
import { router } from '../../../../..';

const externalApiRoute = express.Router();
const chatGptController = new ChatGptController();

// router.post('commet',(req, res) => chatGptController.handle(req, res));

export default { externalApiRoute }