import { Request, Response } from "express";

const getAllUsersController = async (req: Request, res: Response) => {
  console.log("getAllUsersController", req, res);
};

const getSingleController = async (req: Request, res: Response) => {
  console.log("getSingleController", req, res);
};

const createUserController = async (req: Request, res: Response) => {
  console.log("createUserController", req, res);
};

const editUserController = async (req: Request, res: Response) => {
  console.log("editUserController", req, res);
};

const deleteUserController = async (req: Request, res: Response) => {
  console.log("deleteUserController", req, res);
};

export const userControllers = {
  getAllUsersController,
  getSingleController,
  createUserController,
  editUserController,
  deleteUserController,
};
