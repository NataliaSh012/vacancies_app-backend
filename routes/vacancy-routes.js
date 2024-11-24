import { Router } from "express";
// import { check } from "express-validator";
import { getAllVacancies } from "../controllers/vacancies-controllers.js";

const router = Router();

router.get("/", getAllVacancies);


export default router; 