import express from "express";
import { userControllers } from "./user.controller";

const route = express.Router();

route.get("/", userControllers.getAllUsersController);
route.get("/:userId", userControllers.getSingleUserController);
route.post("/", userControllers.createUserController);
route.put("/:userId", userControllers.editUserController);
route.delete("/:userId", userControllers.deleteUserController);

route.put("/:userId/orders", userControllers.addOrderController);
route.get("/:userId/orders", userControllers.allOrdersController);
route.get("/:userId/orders/total-price", userControllers.totalPriceController);

export const UserRoutes = route;
