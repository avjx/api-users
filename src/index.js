import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config()

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>
            console.log(`port ${process.env.PORT}`)
        )
    })
    .catch(err => console.error(err))
