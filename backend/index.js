import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import userRoute from './routes/userRoute.js';
import cors from "cors";

const app = express();
dotenv.config();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
};
app.use(cors(corsOptions));


// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// api
app.use('/user', userRoute);

db();

app.listen(process.env.PORT, ()=>{
    console.log("Server is running on port:" ,process.env.PORT)
})
