import { getCustomRepository } from "typeorm";
import { TasksRepository } from "../repositories/TasksRepository";
import { UsersRepository } from "../repositories/UsersRepository";


interface ICreateCompanyRequest {
    username: string;
}

class ListTasksService {

    async execute({username}: ICreateCompanyRequest) {

        const tasksRepository = getCustomRepository(TasksRepository);
        const usersRepository = getCustomRepository(UsersRepository);
        const userExists = await usersRepository.findOne({username});

        // Validations

        if(!username) {
            throw new Error("Please insert username");
        }

        if(!userExists) {
            throw new Error("User does not exist");
        }

        const userId = userExists.userid;

        // const tasks = tasksRepository.find({userId})

        // return tasks;
    }


}

export { ListTasksService }