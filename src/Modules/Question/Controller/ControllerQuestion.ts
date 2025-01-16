import { IQuestion } from "../model/ModelQuestion";
import { ServiceQuestion } from "../Service/ServiceQuestion";
import { Request, Response } from "express";

export default class ControllerQuestion{
    private service: ServiceQuestion;
    constructor(){
        this.service = new ServiceQuestion();
    }
    async handleCreateQuestion(req: Request, res: Response){
        const {statement, alternatives, answer, difficulty, categoryId} = req.body;
        const question = {
            statement,
            alternatives,
            answer,
            difficulty,
            categoryId
        }
        try{
            const create = await this.service.create(question);
            return res.status(201).json(create);
        }catch(err){
            return res.status(400).json({message: err});
        }
    }
    async handleCreateManyQuestions(req: Request, res: Response) {
        const questions: IQuestion[] = req.body;
        try {
            const create = await this.service.createMany(questions);
            return res.status(201).json(create);
        } catch (err) {
            return res.status(400).json({ message: err });
        }
    }
    async handleFindByyCategoryAndDifficulty(req: Request, res: Response){
        const {categoryId, difficulty} = req.params;
        try{
            const find = await this.service.findByCategoryAndDifficulty(categoryId, difficulty);
            return res.status(200).json(find);
        }catch(err){
            return res.status(400).json({message: err});
        }
    }

}