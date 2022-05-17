import { Router } from "express";
import { CreateTagController } from "./controller/CreateTagController";
import { CreateUserController } from "./controller/CreateUserController";
import { ListUsersController }  from "./controller/ListUsersController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticationUserController } from "./controller/AuthenticationUserController";
import { CreateComplimentController } from "./controller/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceiveComplimentController } from "./controller/ListUserReceiveComplimentController";
import { ListUserSendComplimentController } from "./controller/ListUserSendComplimentController";
import { ListTagsController } from "./controller/ListTagsController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticationUserController = new AuthenticationUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiveComplimentController = new ListUserReceiveComplimentController();
const listUserSendComplimentController = new ListUserSendComplimentController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);

router.post("/login", authenticationUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);


router.post("/users", createUserController.handle);
router.get("/users", listUsersController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentController.handle);
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentController.handle);

export { router };