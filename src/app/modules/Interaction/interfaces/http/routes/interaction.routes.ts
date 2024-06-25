import { Router } from "express";
import { CreatedInteractionController } from "../controller/createdInteractionController";

const router = Router();

router.post("/question", (req, res) => CreatedInteractionController.handle(req, res));

export default router;
