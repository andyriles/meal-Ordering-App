import { Router } from "express";
import menuController from "../controllers/menu.Controller";
import passportService from '../services/passport';
import passport from 'passport';



const mealrouter = Router();

mealrouter.get("/:id", menuController.getMenu);
mealrouter.post("/", menuController.addMenu);
mealrouter.get("/", menuController.fetchAllMenu);

export default mealrouter;
