import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";
import logger from "./middleware/logger.js";

dotenv.config();
const app = express();
connectDB();
app.use(express.json());

app.use(logger);
app.use("/movies",movieRoutes);

const PORT = process.env.PORT || 5000;

function welcome(req,res){
    res.send("Welcome to Screen Scoop Backend");
}
function getMovies(req,res){
    res.json(movies);
}
function serverStarted(){
    console.log(`Server is runningg on http://localhost:${PORT}`);

}
app.get("/",welcome);
app.use("/movies",movieRoutes);
app.listen(PORT,serverStarted);
