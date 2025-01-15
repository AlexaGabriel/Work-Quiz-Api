import  express  from "express";
import catrouter from "../Modules/Category/Routes/RouteCategory";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("olá mundo");
})
app.use("/category", catrouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});