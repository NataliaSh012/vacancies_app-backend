import { Router } from "express";
// import { check } from "express-validator";
import {
  getAllVacancies,
  createVacancy,
  updateVacancy,
  deleteVacancy
} from "../controllers/vacancies-controllers.js";

const router = Router();

router.get("/", getAllVacancies);
router.post("/", createVacancy);
router.patch("/:id", updateVacancy);
router.delete("/:id", deleteVacancy);

export default router; 