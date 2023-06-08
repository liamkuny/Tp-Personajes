import  express  from "express";
import cors from "cors";
import PersonajeRouter from "../Controllers/PersonajeController.js"
import PeliculaRouter from "../Controllers/PeliculaController.js"
import passport from "passport"   //inicio


const app = express();
const port=50527;


app.use(cors());
app.use(express.json());
app.use("/characters", PersonajeRouter);
app.use("/movies", PeliculaRouter);


app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
});

/*
passport.use()     //inicio
app.use()
*/

