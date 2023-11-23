import { Request, Response } from "express";
import { userServices } from "./user.service";

const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUsers();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "failed to retrive users",
      error: {
        code: 404,
        description: "failed to retrive users",
      },
    });
  }
};

const getSingleUserController = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getSingleUser(req.params.userId);

    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "failed to retrive user",
      error: {
        code: 404,
        description: "failed to retrive user",
      },
    });
  }
};

const createUserController = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createUser(req.body);

    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "failed to create user",
      error: {
        code: 404,
        description: "failed to create user",
      },
    });
  }
};

const editUserController = async (req: Request, res: Response) => {
  try {
    const result = userServices.editUser(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "User edited successfully!",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "failed to edit user",
      error: {
        code: 404,
        description: "failed to edit user",
      },
    });
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const result = userServices.deleteUser(req.params.id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "failed to delete user",
      error: {
        code: 404,
        description: "failed to delete user",
      },
    });
  }
};

export const userControllers = {
  getAllUsersController,
  getSingleUserController,
  createUserController,
  editUserController,
  deleteUserController,
};
