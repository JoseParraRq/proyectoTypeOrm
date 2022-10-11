import {request, response,Router} from "express";
import { UserController } from "../controller/user.controller";
import {middlewareJwt, middlewareUserType} from "../middleware/middleware.api";
const router = Router();

router.post("/login",UserController.login);
router.post("/createUser", middlewareJwt,middlewareUserType,UserController.createUser);
router.post("/getUserById",middlewareJwt,UserController.getUserById);
router.get("/getAllUsers",middlewareJwt,UserController.getAllUsers);
router.put("/updateUser",middlewareJwt,middlewareUserType, UserController.updateUser);
router.delete("/deleteUser",middlewareJwt,middlewareUserType, UserController.deleteUser);

export default router; 