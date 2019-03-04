import { Router } from "express";
import orderController from "../controllers/order.Controller";
import passport from 'passport';
import passportService from '../services/passport';

const requireAuthentication = passport.authenticate('jwt', { session: false });

const orderRouter = Router();

orderRouter.get("/", requireAuthentication, orderController.fetchAllOrders);
orderRouter.post("/", requireAuthentication, orderController.placeorder);
orderRouter.put("/:id", requireAuthentication, orderController.updateOrder);

export default orderRouter;
