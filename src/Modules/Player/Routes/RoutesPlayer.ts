import { Router, Request, Response } from "express";
import ControllerPlayer from "../Controller/ControllerPlayer";

const playerrouter = Router();
const contPlayer = new ControllerPlayer();

playerrouter.post("/create", async (req: Request, res: Response) => {
    await contPlayer.handlecreatePlayer(req, res);
});
playerrouter.get("/findAll", async (req: Request, res: Response) => {
    await contPlayer.handlefindAllPlayer(req, res);
});
playerrouter.get("/findById/:id", async (req: Request, res: Response) => {
    await contPlayer.handlefindByIdPlayer(req, res);
});
playerrouter.put("/upPontuation/:id", async (req: Request, res: Response) => {
    await contPlayer.handleupdatePontuationPlayer(req, res);
});
export default playerrouter;
