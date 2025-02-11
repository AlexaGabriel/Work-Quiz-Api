import { ServicePlayer } from "../Service/ServicePlayer";
import { NextFunction, Request, Response } from "express";
import { SPlayer } from "../Schema/SchemaPlayer";
import { generateToken, verifyToken } from "../../../config/JWT";
import bcrypt from "bcrypt";

export default class ControllerPlayer{
    private ServicePlayer: ServicePlayer
    constructor(){
        this.ServicePlayer = new ServicePlayer()
    }
    async handlecreatePlayer(req: Request, res: Response){
        const {name, password} = req.body
        const validate = SPlayer.safeParse({name, password})
        if(!validate.success){
            const errorMessages = validate.error.issues.map(issue => issue.message).join(", ");
            return res.status(400).json({message: errorMessages});
        }
        const maxScore = 0
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        try {
            const create = await this.ServicePlayer.create({name, password:hashedPassword, maxScore})
            return res.status(201).json(create)
        } catch (error: unknown) {
            if (error instanceof Error && error.message === "Nome de usuário já existe!") {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: "Erro interno do servidor" });
        }
    }    async handlefindAllPlayer(req: Request, res: Response){
        try {
            const findAll = await this.ServicePlayer.findAll()
            return res.status(200).json(findAll)
        } catch (error) {
            return res.status(400).json({message: error})
        }
    }
    async handlefindByIdPlayer(req: Request, res: Response){
        const {id} = req.params
        try {
            const findById = await this.ServicePlayer.findById(id)
            return res.status(200).json(findById)
        }catch (error) {
            return res.status(400).json({message: error})
        }
    }
    async handleupdatePontuationPlayer(req: Request, res: Response){
        const {id} = req.params
        const {maxScore} = req.body
        try {
            const upPontuation = await this.ServicePlayer.updatePontuation(id, {maxScore})
            return res.status(200).json(upPontuation)
        } catch (error) {
            return res.status(400).json({message: error})
        }
    }
    async handleAuthPlayer(req: Request, res: Response) {
        const { name, password } = req.body as { name: string; password: string };
        const player = await this.ServicePlayer.AuthPlayer({ name, password, id: "" });
        if (!player) {
            return res.status(400).send({ error: "Invalid name or password" });
            
        }
        const passwordMatch = await bcrypt.compare(password, player.password);
        if (!passwordMatch) {
            return res.status(400).send({ error: "Invalid password" });
        }

        const token = generateToken({ id: player.id, name: player.name });
        return res.status(200).json({ token, message: "Authentication successful" });
    }

    
}