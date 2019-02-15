import { Router } from "express";
import orderController from "../controllers/order.controller";

const orderRouter = Router();

orderRouter.get("/", orderController.fetchAllOrders);
orderRouter.post("/", orderController.placeorder);
orderRouter.put("/:id", orderController.updateOrder);

export default orderRouter;
