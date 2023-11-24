import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config";
import { TUser, UserModel } from "./user.interface";

const fullNameSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const ordersSchema = new Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const userSchema = new Schema({
  userId: { type: Number, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: fullNameSchema, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  hobbies: [{ type: String, required: true }],
  address: { type: addressSchema, required: true },
  orders: [{ type: ordersSchema }],
});

userSchema.static("isUserExists", async function (id: string) {
  const user = User.findOne({ userId: id });
  return user;
});

userSchema.pre("save", async function (next) {
  const data = this;
  data.password = await bcrypt.hash(
    data.password,
    Number(config.bcrypt_salt_rounds)
  );

  next();
});

export const User = model<TUser, UserModel>("User", userSchema);
