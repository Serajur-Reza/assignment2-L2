import express from "express";
import { userControllers } from "./user.controller";

const route = express.Router();

route.get("/", userControllers.getAllUsersController);
route.get("/:userId", userControllers.getSingleUserController);
route.post("/", userControllers.createUserController);
route.put("/:userId", userControllers.editUserController);
route.delete("/:userId", userControllers.deleteUserController);

export const UserRoutes = route;
