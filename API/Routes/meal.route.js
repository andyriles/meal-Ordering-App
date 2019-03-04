import { Router } from "express";
import passport from 'passport';
import Mealcontroller from "../controllers/meal.Controller";
import passportService from '../services/passport';

const router = Router();

const requireAuthentication = passport.authenticate('jwt', { session: false });

router.get("/", requireAuthentication, Mealcontroller.fetchAllMeals);
router.post("/", requireAuthentication, Mealcontroller.addMeal);
router.get("/:id", requireAuthentication, Mealcontroller.getSingleMeal);
router.put("/:id", requireAuthentication, Mealcontroller.updateMeal);
router.delete("/:id", requireAuthentication, Mealcontroller.deleteAMeal);

export default router;
