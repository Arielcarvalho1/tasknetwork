import { getCustomRepository } from "typeorm";
import { TasksRepository } from "../repositories/TasksRepository";



interface ICreateServiceRequest {
    owner_id: string,
    title: string,
    description: string
}

class CreateTaskService {

    async execute({owner_id, title, description}: ICreateServiceRequest) {
        const tasksRepository = getCustomRepository(TasksRepository);
        const createdTask = tasksRepository.create({owner_id, title, description});

        if(!owner_id) {
            throw new Error("Please insert Owner id");
        }

        if(!title) {
            throw new Error("Please insert title");
        }

        /*
        const taskAlreadyExists = await tasksRepository.findOne({owner_id, title});

        if(taskAlreadyExists) {
            throw new Error("This service is already registered");
        }
        */

        // After checking if everything is okay we save to database and then index to sonicsearch
        // so the data will searchable.

        await tasksRepository.save(createdTask);


        return createdTask;
    }

}

export { CreateTaskService };