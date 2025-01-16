import { IPlayer, IPlayerRepo, IPontuation } from "../model/ModelPlayer";
import { prisma } from "../../../config/prisma";

export class RepositoryPlayer implements IPlayerRepo{
    async create(player: IPlayer): Promise<IPlayer> {
        const create = await prisma.player.create({
            data:player
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