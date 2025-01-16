import ControllerQuestion from "../Controller/ControllerQuestion";
import { Router, Request, Response } from "express";

const Questionrouter = Router();
const contQuestion = new ControllerQuestion();

Questionrouter.post("/create", async (req: Request, res: Response) => {
    await contQuestion.handleCreateQuestion(req, res);
});
Questionrouter.post("/createMany", async (req: Request, res: Response) => {
    await contQuestion.handleCreateManyQuestions(req, res);
});
Questionrouter.get("/findByCategoryAndDifficulty/:categoryId/:difficulty", async (req: Request, res: Response) => {
    await contQuestion.handleFindByyCategoryAndDifficulty(req, res);
});

export default Questionrouter;