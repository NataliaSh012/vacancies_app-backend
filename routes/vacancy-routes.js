import { Router } from "express";
// import { check } from "express-validator";
import {
  getAllVacancies,
  createVacancy,
} from "../controllers/vacancies-controllers.js";

const router = Router();

router.get("/", getAllVacancies);
router.post("/", createVacancy);

export default router; 