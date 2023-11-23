import { TUser } from "./user.interface";
import { User } from "./user.schema";

const getUsers = async () => {
  const result = await User.find();
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await User.findOne({ userId: Number(id) });
  return result;
};

const createUser = async (user: TUser) => {
  const result = new User(user);
  await result.save();
  return result;
};

const editUser = async (id: string, data: object) => {
  const result = await User.findOneAndUpdate({ userId: Number(id) }, data, {
    new: true,
  });
  console.log(result);
  return result;
};

const deleteUser = async (id: string) => {
  const result = await User.deleteOne({ userId: Number(id) });
  return result;
};

export const userServices = {
  getUsers,
  getSingleUser,
  createUser,
  editUser,
  deleteUser,
};
