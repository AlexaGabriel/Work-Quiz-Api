import { ServicePlayer } from "../Service/ServicePlayer";
import { Request, Response } from "express";

export default class ControllerPlayer{
    private ServicePlayer: ServicePlayer
    constructor(){
        this.ServicePlayer = new ServicePlayer()
    }
    async handlecreatePlayer(req: Request, res: Response){
        const {name, password} = req.body
        const maxScore = 0
        try {
            const create = await this.ServicePlayer.create({name, password, maxScore})
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
}