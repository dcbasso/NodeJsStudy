import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService"

class ListUserSendComplimentController {

    async handle(request: Request, response: Response) {
        const { user_id } = request;
        const listReceiveReceiveComplimentsService = new ListUserSendComplimentsService();


        const compliments = await listReceiveReceiveComplimentsService.execute(user_id);    

        return response.json(compliments);
    }

}

export { ListUserSendComplimentController }