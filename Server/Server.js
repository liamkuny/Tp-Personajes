import  express  from "express";
import cors from "cors";
import PersonajeRouter from "../Controllers/PersonajeController.js"
import PeliculaRouter from "../Controllers/PeliculaController.js"
import passport from "passport";
import { jwtStrategy } from '../common/jwt.strategy.js';
import AuthRouter from "../Controllers/AuthController.js";


const app = express();
const port=3000;


app.use(cors());
app.use(express.json());
app.use("/characters", PersonajeRouter);
app.use("/movies", PeliculaRouter);
app.use("/auth", AuthRouter);
app.use(passport.initialize());
passport.use(jwtStrategy);

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
});







