import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface IUserRequest {
    name : string;
}

class CreateTagService {

    async execute({name}: IUserRequest) {
        const tagsRepository = getCustomRepository(TagsRepositories);

        if (!name) {
            throw new Error("Incorrect name");
        }

        const alreadyExists = await tagsRepository.findOne({name});
        
        if (alreadyExists) {
            throw new Error("Tag already exists");
        }


        const tag = tagsRepository.create({name});
        await tagsRepository.save(tag);
        return tag;
    }

}

export {CreateTagService};