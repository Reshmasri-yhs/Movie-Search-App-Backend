import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";
import logger from "./middleware/logger.js";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

dotenv.config();
const app = express();
connectDB();
app.use(express.json());

app.use(logger);
app.use("/movies",movieRoutes);
app.get("/", (req, res) => {
    res.send("Welcome to Screen Scoop Backend");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);

});

