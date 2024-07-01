import express from "express";
import { DeleteOne, create, getOne, getall, updateOne } from "../controller/userController.js";

const route=express.Router();

route.post("/create",create)
route.get("/getall",getall)
route.get("/get/:id",getOne);
route.put("/update/:id",updateOne);
route.delete("/delete/:id",DeleteOne);
export default route;