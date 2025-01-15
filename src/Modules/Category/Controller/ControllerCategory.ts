import ServiceCategory from "../Service/ServiceCategory";
import { Request, Response } from "express";


export default class ControllerCategory{
    private serviceCat : ServiceCategory;
    constructor(){
        this.serviceCat = new ServiceCategory()
    }
    async handleCreateCategory(req: Request, res: Response){
        const{name} = req.body
        try {
            const create = await this.serviceCat.create({name})
            res.status(201).send(create)
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async handleFindAllCategory(req: Request, res: Response){
        try {
            const findAll = await this.serviceCat.findAll()
            res.status(200).send(findAll)
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async handleFindByIdCategory(req: Request, res: Response){
        const {id} = req.params
        try {
            const findById = await this.serviceCat.findById(id)
            res.status(200).send(findById)
        } catch (error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}