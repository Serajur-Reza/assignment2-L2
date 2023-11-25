import { TOrders, TUser } from "./user.interface";
import { User } from "./user.schema";

const getUsers = async () => {
  const result = await User.aggregate([
    {
      $project: {
        password: 0,
        orders: 0,
      },
    },
  ]);
  return result;
};

const getSingleUser = async (id: string) => {
  if (!(await User.isUserExists(id))) {
    throw new Error("user does not exist");
  }
  const result = await User.findOne(
    { userId: Number(id) },
    { password: 0, orders: 0 }
  );
  return result;
};

const createUser = async (user: TUser) => {
  let result = new User(user);
  await result.save();

  result = await User.findOne(
    { userId: Number(result.userId) },
    { password: 0, orders: 0 }
  );
  return result;
};

const editUser = async (id: string, data: TUser) => {
  if (!(await User.isUserExists(id))) {
    throw new Error("user does not exist");
  }
  let result = await User.updateOne({ userId: Number(id) }, data, {
    new: true,
  });
  result = await User.findOne(
    { userId: Number(id) },
    { password: 0, orders: 0 }
  );

  return result;
};

const deleteUser = async (id: string) => {
  if (!(await User.isUserExists(id))) {
    throw new Error("user does not exist");
  }
  const result = await User.deleteOne({ userId: Number(id) });
  return result;
};

const addOrder = async (id: string, order: TOrders) => {
  if (!(await User.isUserExists(id))) {
    throw new Error("user does not exist");
  }

  const result = await User.findOne({ userId: Number(id) });
  console.log(order);
  result?.orders.push(order);
  await result?.save();
  return result;
};

const getOrders = async (id: string) => {
  if (!(await User.isUserExists(id))) {
    throw new Error("user does not exist");
  }

  const result = await User.aggregate([
    {
      $match: { userId: { $eq: Number(id) } },
    },
    { $unwind: "$orders" },
    {
      $project: {
        orders: 1,
      },
    },
  ]);
  return result;
};

const totalPrice = async (id: string) => {
  if (!(await User.isUserExists(id))) {
    throw new Error("user does not exist");
  }

  const result = await User.aggregate([
    {
      $match: { userId: { $eq: Number(id) } },
    },
    { $unwind: "$orders" },
    {
      $project: {
        orders: 1,
        totalPrice: {
          $sum: { $multiply: ["$orders.price", "$orders.quantity"] },
        },
      },
    },
  ]);
  return result;
};

export const userServices = {
  getUsers,
  getSingleUser,
  createUser,
  editUser,
  deleteUser,
  addOrder,
  getOrders,
  totalPrice,
};
