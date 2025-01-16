import  express  from "express";
import catrouter from "../Modules/Category/Routes/RouteCategory";
import playerrouter from "../Modules/Player/Routes/RoutesPlayer";
import Questionrouter from "../Modules/Question/Routes/RoutesQuestion";

const app = express();

app.use(express.json());

app.get("/naoentreaqui", (req, res) => {
    res.send("eu mandei você não entrar aqui");
})
app.use("/category", catrouter);
app.use("/player", playerrouter);
app.use("/question", Questionrouter)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});