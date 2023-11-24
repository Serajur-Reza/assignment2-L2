import { z } from "zod";

const FullNameValidator = z.object({
  firstName: z.string().min(3).default("abc"),
  lastName: z.string().min(3).default("abc"),
});

const AddressValidator = z.object({
  street: z.string().min(3).default("abc"),
  city: z.string().min(3).default("abc"),
  country: z.string().min(3).default("abc"),
});

const OrderValidator = z.object({
  productName: z.string().min(3).default("abc"),
  price: z.number().default(0),
  quantity: z.number().default(0),
});

const UserValidator = z.object({
  userId: z.number(),
  username: z.string().min(3).default("abc"),
  password: z.string().min(3).default("abc"),
  fullName: FullNameValidator,
  hobbies: z.string().array(),
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean().default(false),
  address: AddressValidator,
  orders: OrderValidator.array(),
});

export default UserValidator;
