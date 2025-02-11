export interface IPlayer{
    name: string,
    password:string
    maxScore: number,
}
export interface IPlayerAuth{
    id: string,
    name: string,
    password: string
}
export interface IPontuation{
    maxScore: number,
}
export interface IPlayerRepo{
    create(player: IPlayer): Promise<IPlayer>
    findAll(): Promise<IPlayer[]>
    findById(id: string): Promise<IPlayer | null>
    updatePontuation(id: string, pontuation: IPontuation): Promise<IPontuation | null>
    AuthPlayer(data: IPlayerAuth): Promise<IPlayerAuth|null>
}