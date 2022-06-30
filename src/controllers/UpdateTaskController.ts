import { Request, Response} from "express";
import { UpdateTaskService } from "../services/UpdateTaskService";

class UpdateTaskController {

    async handle(request: Request, response: Response) {
        const createCompanyService = new UpdateTaskService();
        const { taskId,
                status 
        } = request.body;

        const id = request.userid;

        const task = await createCompanyService.execute({
            taskId,
            status 
        });

        return response.json(task);
    }

}

export { UpdateTaskController }