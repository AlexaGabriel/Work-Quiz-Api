import { ServicePlayer } from "../Service/ServicePlayer";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

export default class ControllerPlayer{
    private ServicePlayer: ServicePlayer
    constructor(){
        this.ServicePlayer = new ServicePlayer()
    }
    async handlecreatePlayer(req: Request, res: Response){
        const {name, password} = req.body
        const maxScore = 0
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        try {
            const create = await this.ServicePlayer.create({name, password:hashedPassword, maxScore})
            return res.status(201).json(create)
        } catch (error) {
            return res.status(400).json({message: error})
        }
    }
    async handlefindAllPlayer(req: Request, res: Response){
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
        const player = await this.ServicePlayer.AuthPlayer({ name, password });
        if (!player) {
            return res.status(400).send({ error: "Invalid email or password" });
        }
        const passwordMatch = await bcrypt.compare(password, player.password);
        if (!passwordMatch) {
            return res.status(400).send({ error: "Invalid email or password" });
        }
        return res.status(200).send({ message: "Authentication successful" });
    }}