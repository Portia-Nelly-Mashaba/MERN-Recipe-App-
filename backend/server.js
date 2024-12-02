import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/database.js";
import router from "./routes/api.js";

const app = express();
const PORT = process.env.PORT || 7000

connectDB()
app.use(cors());
app.use(express.json());
app.use('/api/v1', router)



app.listen(PORT, () => console.log(`Sever started on PORT ${PORT}`)
)
