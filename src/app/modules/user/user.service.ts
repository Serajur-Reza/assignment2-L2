import { TUser } from "./user.interface";
import { User } from "./user.schema";

const getUsers = async () => {
  const result = await User.find();
  return result;
};

const getSingleUser = async (id: string) => {
  if (!(await User.isUserExists(id))) {
    throw new Error("user does not exist");
  }
  const result = await User.findOne({ userId: Number(id) });
  return result;
};

const createUser = async (user: TUser) => {
  const result = new User(user);
  await result.save();
  return result;
};

const editUser = async (id: string, data: object) => {
  if (!(await User.isUserExists(id))) {
    throw new Error("user does not exist");
  }
  // const doc = await User.find({ userId: Number(id) });
  // if (data?.hobbies) {
  //   doc.hobbies = [...doc.hobbies, ...data.hobbies];
  //   console.log(doc.hobbies);
  // }
  const result = await User.findOneAndUpdate({ userId: Number(id) }, data, {
    new: true,
  });
  return result;
};

const deleteUser = async (id: string) => {
  if (!(await User.isUserExists(id))) {
    throw new Error("user does not exist");
  }
  const result = await User.deleteOne({ userId: Number(id) });
  return result;
};

const addOrder = async (id: string) => {
  if (!(await User.isUserExists(id))) {
    throw new Error("user does not exist");
  }
};

const allOrders = async (id: string) => {
  if (!(await User.isUserExists(id))) {
    throw new Error("user does not exist");
  }
};

const totalPrice = async (id: string) => {
  if (!(await User.isUserExists(id))) {
    throw new Error("user does not exist");
  }
};

export const userServices = {
  getUsers,
  getSingleUser,
  createUser,
  editUser,
  deleteUser,
  addOrder,
  allOrders,
  totalPrice,
};
