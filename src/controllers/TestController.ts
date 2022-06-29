import { Request, Response } from "express";
import { TestService } from "../services/TestService";

class TestController {

    async handle(request: Request, response: Response) {
        console.log("handle");
        const testService = new TestService();
        const send = await testService.execute()
        console.log(send);
        response.send(send);

    }
}

export { TestController };