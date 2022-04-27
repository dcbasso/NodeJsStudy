import { UserService } from "@services/UserService"
import { Request, Response} from "express";



export class UserController {
    
    async createUser(request: Request, response: Response) {
        const {name, email, admin} = request.body;
        const userService = new UserService();
        const newUser = await userService.createUser({name, email, admin});
        return response.json(newUser);
    }

}