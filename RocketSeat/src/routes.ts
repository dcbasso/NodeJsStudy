import { UserController } from "@controllers/UserController";
import { Router } from "express";


const router = Router();

const userController = new UserController;

router.post("/users", (request, reponse) => userController.createUser)

export { router }