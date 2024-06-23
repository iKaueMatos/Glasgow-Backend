import { Router } from "express";
import { CreatedInteractionController } from "../controller/createdInteractionController";

const router = Router();

router.post("/question", CreatedInteractionController.handle);

export default router;
