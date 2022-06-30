import { Request, Response} from "express"
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {

    async handle(request: Request, response: Response) {
        const createUserService = new CreateUserService();

        const { username,
                password,
                firstName,
                lastName,
                mission} = request.body;
        
        const user = await createUserService.execute({username,
                                                      password,
                                                      firstName,
                                                      lastName,
                                                      mission});

        return response.json(user);
    }

}

export { CreateUserController };