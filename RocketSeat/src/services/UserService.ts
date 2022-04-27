import { UsersRepositories } from "@repository/UsersRepositories";

interface IUserRequest {
    name : string;
    email : string;
    admin? : boolean;
}

export class UserService {


    async createUser({name, email, admin} : IUserRequest) {
        const usersRepositories = new UsersRepositories();
        const userAlreadyExists = await usersRepositories.findOne({
            email
        });

        if (!email) {
            throw new Error("Incorrect email");
        }

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const user = usersRepositories.create({
            name, 
            email,
            admin
        });

        await usersRepositories.save(user);
    }

}