import { Router } from "express";
import Mealcontroller from "../controllers/meal.Controller";

const router = Router();

router.get("/", Mealcontroller.fetchAllMeals);
router.post("/", Mealcontroller.addAMeal);
router.get("/:id", Mealcontroller.getSingleMeal);

export default router;
