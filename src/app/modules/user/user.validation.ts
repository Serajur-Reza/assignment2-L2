import { z } from "zod";

const FullNameValidator = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
});

const AddressValidator = z.object({
  street: z.string().min(3),
  city: z.string().min(3),
  country: z.string().min(3),
});

const OrderValidator = z.object({
  productName: z.string().min(3),
  price: z.number(),
  quantity: z.number(),
});

const UserValidator = z.object({
  userId: z.number(),
  username: z.string().min(3),
  password: z.string().min(5),
  fullName: FullNameValidator,
  hobbies: z.string().array(),
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean().default(false),
  address: AddressValidator,
  orders: OrderValidator,
});

export default UserValidator;
