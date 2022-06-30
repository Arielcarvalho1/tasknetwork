import { request } from "express";
import { getCustomRepository } from "typeorm";
import { TasksRepository } from "../repositories/TasksRepository";



interface IUpdateTaskRequest {
    taskId: string,
    status: string
}

class UpdateTaskService {

    async execute({taskId, status}: IUpdateTaskRequest) {
        const tasksRepository = getCustomRepository(TasksRepository);
        const task = await tasksRepository.findOne(taskId);

        const updatedTask = await tasksRepository.save({task_id: taskId, status});
        return updatedTask;
        
        console.log("out")

    }

}

export { UpdateTaskService };