import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { TestController } from "./controllers/TestController";

const router = Router();

// Controllers
const testController = new TestController();
const createUserController = new CreateUserController();

// My routes
router.get("/test", testController.handle);
router.post("/users/create", createUserController.handle);
export { router };