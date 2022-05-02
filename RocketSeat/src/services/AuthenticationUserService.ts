import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IAuthenticatieRequest {
    email: string;
    password: string;
}

class AuthenticationUserService {


    async execute({email, password}: IAuthenticatieRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({email});

        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        
        const passMatch = await compare(password, user.password);
        if (!passMatch) {
            throw new Error("Email/Password incorrect");
        }


        const token = sign(
            {
                email: user.email
            }, 
            "fede3c5295416593e7a4e25d882ad83b", 
            {
                subject: user.id,
                expiresIn: "1d"
            }
        );
        return token;
    }

}

export { AuthenticationUserService } 