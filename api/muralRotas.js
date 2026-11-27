import express from "express";
import MuralController from "../controller/muralController.js";

const router = express.Router();

router.get("/", MuralController.listar);
router.post("/", MuralController.salvarPost);
router.post("/:id/curtir", MuralController.curtirPost);
router.post("/:id/resposta", MuralController.salvarResposta);

export default router;
