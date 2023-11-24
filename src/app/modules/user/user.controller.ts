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
        description: (err as Error)?.message as string,
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
        description: (err as Error)?.message as string,
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
        description: (err as Error)?.message as string,
      },
    });
  }
};

const editUserController = async (req: Request, res: Response) => {
  try {
    const result = await userServices.editUser(req.params.userId, req.body);

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
        description: (err as Error)?.message as string,
      },
    });
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  try {
    await userServices.deleteUser(req.params.userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "failed to delete user",
      error: {
        code: 404,
        description: (err as Error)?.message as string,
      },
    });
  }
};

const addOrderController = async (req: Request, res: Response) => {
  try {
    const result = await userServices.addOrder(req.params.userId, req.body);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "failed to add order",
      error: {
        code: 404,
        description: (err as Error)?.message as string,
      },
    });
  }
};

const allOrdersController = async (req: Request, res: Response) => {
  try {
    await userServices.getOrders(req.params.userId);
    res.status(200).json({
      success: true,
      message: "Order fetched successfully!",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "failed to retrieve order",
      error: {
        code: 404,
        description: (err as Error)?.message as string,
      },
    });
  }
};

const totalPriceController = async (req: Request, res: Response) => {
  try {
    const result = await userServices.totalPrice(req.params.userId);
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
      sum = sum + result[i].totalPrice;
    }
    res.status(200).json({
      success: true,
      message: "Total price calculated successfully!",
      data: {
        totalPrice: sum,
      },
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "failed to total price",
      error: {
        code: 404,
        description: (err as Error)?.message as string,
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
  addOrderController,
  allOrdersController,
  totalPriceController,
};
