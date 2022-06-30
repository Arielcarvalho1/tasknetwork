import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface ICreateUserRequest {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    mission: string,
}

class CreateUserService {
    
    async execute({username, password, firstName, lastName, mission}: ICreateUserRequest) {

        const usersRepository = getCustomRepository(UsersRepository);
        const passwordHash = await hash(password, 8);
        const userAlreadyExists = await usersRepository.findOne({username});
    
        if(userAlreadyExists) {
            throw new Error("User already exists");
        }

        if(!username) {
            throw new Error("Please insert username");
        }

        if(!password) {
            throw new Error("Please insert password");
        }

        if(!firstName) {
            throw new Error("Please insert name");
        }

        if(!lastName) {
            throw new Error("Please insert last name");
        }

        const user = usersRepository.create({username,
                                            password: passwordHash,
                                            firstName,
                                            lastName,
                                            mission});
        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };