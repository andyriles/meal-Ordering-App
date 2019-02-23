import { Router } from "express";
import Mealcontroller from "../controllers/meal.Controller";

const router = Router();

router.get("/", Mealcontroller.fetchAllMeals);
router.post("/", Mealcontroller.addMeal);
router.get("/:id", Mealcontroller.getSingleMeal);
router.put("/:id", Mealcontroller.updateMeal);
router.delete("/:id", Mealcontroller.deleteAMeal);

export default router;
