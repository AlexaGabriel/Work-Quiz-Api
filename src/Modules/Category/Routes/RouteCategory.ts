import { Router, Request, Response } from "express";
import ControllerCategory from "../Controller/ControllerCategory";

const catrouter = Router();
const contCate = new ControllerCategory();

catrouter.post("/create", async (req: Request, res: Response) => {
    await contCate.handleCreateCategory(req, res); 
});
catrouter.get("/findAll", async (req: Request, res: Response) => {
    await contCate.handleFindAllCategory(req, res);
});
catrouter.get("/findById/:id", async (req: Request, res: Response) => {
    await contCate.handleFindByIdCategory(req, res);
});
export default catrouter;
