import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

app.use(errorHandler)

dotenv.config()
const app = express()
app.use(express.json())
app.use(routes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // mongo conn
        app.listen(process.env.PORT, () =>
            console.log(`port: ${process.env.PORT}`)
        )
    })
    .catch(err => console.log(err))