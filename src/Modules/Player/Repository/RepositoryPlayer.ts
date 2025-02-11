import { IPlayer, IPlayerAuth, IPlayerRepo, IPontuation } from "../model/ModelPlayer";
import { prisma } from "../../../config/prisma";

export class RepositoryPlayer implements IPlayerRepo{
    async AuthPlayer(data: IPlayerAuth): Promise<IPlayerAuth | null> {
        const authPlayer = await prisma.player.findFirst({
            where: {
                name: data.name,
            }
        });
        return authPlayer;
    }
    async create(player: IPlayer): Promise<IPlayer> {
        const existingUser = await prisma.player.findUnique({
            where: { name: player.name },
        });
        
        if (existingUser) {
            throw new Error("Nome de usuário já existe");
        }
        
        const create = await prisma.player.create({
            data: player
        });
        return create;
    }
    async findAll(): Promise<IPlayer[]> {
        const findAll = await prisma.player.findMany();
        return findAll;
    }
    async findById(id: string): Promise<IPlayer | null> {
        const findById = await prisma.player.findUnique({
            where:{
                id: id
            }
        });
        return findById;
    }
    async updatePontuation(id: string, pontuation: IPontuation): Promise<IPontuation | null> {
        const upPontuation = await prisma.player.update({
            where:{
                id:id
            },
            data:pontuation
        });
        return upPontuation;
    }
    

} 