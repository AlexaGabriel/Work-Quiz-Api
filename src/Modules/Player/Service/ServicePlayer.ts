import { RepositoryPlayer } from "../Repository/RepositoryPlayer";
import { IPlayer, IPlayerAuth, IPlayerRepo, IPontuation } from "../model/ModelPlayer";


export class ServicePlayer{
    private repository: IPlayerRepo
    constructor(){
        this.repository = new RepositoryPlayer()
    }
    async create(player: IPlayer): Promise<IPlayer>{
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
    async AuthPlayer(data: IPlayerAuth): Promise<IPlayerAuth | null>{
        const authPlayer = await this.repository.AuthPlayer(data)
        return authPlayer
    }
}