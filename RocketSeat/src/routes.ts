import { Router } from "express";
import { CreateTagController } from "./controller/CreateTagController";
import { CreateUserController } from "./controller/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticationUserController } from "./controller/AuthenticationUserController";
import { CreateComplimentController } from "./controller/CreateComplimentController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticationUserController = new AuthenticationUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", authenticationUserController.handle);
router.post("/compliments", createComplimentController.handle);

export { router };