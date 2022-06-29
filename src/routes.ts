import { Router } from "express";
import { TestController } from "./controllers/TestController";

const router = Router();

// Controllers
const testController = new TestController();

// My routes
router.get("/test", testController.handle);
export { router };