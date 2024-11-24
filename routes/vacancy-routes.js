import { Router } from "express";
// import { check } from "express-validator";
import {
  getAllVacancies,
  createVacancy,
  updateVacancy,
} from "../controllers/vacancies-controllers.js";

const router = Router();

router.get("/", getAllVacancies);
router.post("/", createVacancy);
router.patch("/:id", updateVacancy);

export default router; 