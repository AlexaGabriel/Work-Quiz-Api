import { RepositoryPlayer } from "../Repository/RepositoryPlayer";
import { IPlayer, IPlayerRepo, IPontuation } from "../model/ModelPlayer";
import { SPlayer } from "../Schema/SchemaPlayer";

export class ServicePlayer{
    private repository: IPlayerRepo
    constructor(){
        this.repository = new RepositoryPlayer()
    }
    async create(player: IPlayer): Promise<IPlayer>{
        const validate = SPlayer.safeParse(player)
        if(!validate.success){
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            throw new Error(`Validation failed: ${errorMessages}`);
        }
        const create = await this.repository.create(player)
        return create
    }
    async findAll(): Promise<IPlayer[]>{
        const findAll = await this.repository.findAll()
        return findAll
    }
    async findById(id: string): Promise<IPlayer | null>{
        const findById = await this.repository.findById(id)
        return findById
    }
    async updatePontuation(id: string, pontuation: IPontuation): Promise<IPontuation | null>{
        const upPontuation = await this.repository.updatePontuation(id, pontuation)
        return upPontuation
    }
}