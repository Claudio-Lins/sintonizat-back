import { Router } from "express";
import UserControllers from "./constroller/UserControllers";
const router = Router();

router.post("/user", UserControllers.createUser) 
router.get("/users", UserControllers.findAllUsers) 
router.get("/user/:id", UserControllers.findUser) 
router.put("/user/:id", UserControllers.updateUser) 
router.delete("/user/:id", UserControllers.deleteUser) 

export { router };
