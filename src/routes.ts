import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { TestController } from "./controllers/TestController";
import { ensureAuthenticated } from "./middlewares/EnsureAuthenticated";

const router = Router();

// Controllers
const testController = new TestController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

// My routes
router.get("/test", testController.handle);
router.post("/users/create", ensureAuthenticated, createUserController.handle);
router.post("/login", authenticateUserController.handle);
export { router };