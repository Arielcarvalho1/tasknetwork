import { Request, Response } from "express";
import { CreateTaskService } from "../services/CreateTaskService";


class CreateTaskController {

    async handle(request: Request, response: Response) {
        const createTaskService = new CreateTaskService();
        const { title, description } = request.body;
        const { userid } = request; // Taking the user id from the session
        const createdService = await createTaskService.execute({owner_id: userid, title, description}); // We take owner id AS company id

        return response.json(createdService);
    }

}

export { CreateTaskController };