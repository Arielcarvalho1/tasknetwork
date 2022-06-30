import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepository } from "../repositories/UsersRepository";

interface IAuthenticateRequest {
    username: string,
    password: string
}

class AuthenticateUserService {

    async execute({username, password}: IAuthenticateRequest) {
        const usersRepository = getCustomRepository(UsersRepository);
        
        // First we check if we received the necessary information 
        if(!username) {
            throw new Error("Please insert username");
        }

        if(!password) {
            throw new Error("Please insert password");
        }

        // Now we check if that user exists in the database
        const user = await usersRepository.findOne({username});

        if(!user) {
            throw new Error("Username/password incorrect");
        }
    
        /**  We typecast to string here cause the value we receive from the user object is of type of the wrapper
        * for String instead of the primitive string
         */

        const passwordMatch = await compare(password, user.password as string); 

        if(!passwordMatch) {
            throw new Error("Email/password incorrect");
        }

        // If the user successfuly enters the correct info we give them a token

        const token = sign(
            {
                email: user.username,
            }, "0cf0607937013cb58d79a7d3c59d4e11", // md5 encrypted salt
            {
                subject: user.userid,
                expiresIn: "1d"         // The token will expire in one day
            }
        )

        return token;

    }

}

export { AuthenticateUserService };