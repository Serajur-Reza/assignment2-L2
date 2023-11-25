import express, { Application } from "express";
import cors from "cors";
import { UserRoutes } from "./app/modules/user/user.routes";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/api/users/", UserRoutes);
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "app is running successfully",
  });
});

export default app;
