import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import cors from "cors";
import productRoutes from "./routes/Products.js";
import categoriesRoutes from "./routes/Category.js";
import brandsRoutes from "./routes/Brand.js";
import userRoutes from "./routes/User.js";
import authRoutes from "./routes/Auth.js";

const server = express();

dotenv.config();

server.use(express.json());
server.use(cors());
server.use("/products", productRoutes);
server.use("/categories", categoriesRoutes);
server.use("/brands", brandsRoutes);
server.use("/user", userRoutes);
server.use("/auth", authRoutes);

connectDB();

server.listen(process.env.PORT, () => {
  console.log("server started");
});
