import  express  from "express";
import cors from "cors";
import PersonajeRouter from "../Controllers/PersonajeController.js"
import PeliculaRouter from "../Controllers/PeliculaController.js"
import passport from "passport"   //inicio


const app = express();
const port=5000;


app.use(cors());
app.use(express.json());
app.use("/characters", PersonajeRouter);
app.use("/movies", PeliculaRouter);


/*
passport.use()     //inicio
app.use()
*/


app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
});
