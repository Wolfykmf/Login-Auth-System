import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/authRoutes.js"
import { connectDB } from "./lib/db.js"

dotenv.config()

const app = express()

app.use(express.json())

app.use("/api/auth", authRoutes)

app.listen(process.env.PORT, () => {
    console.log("Server is running on PORT: ", process.env.PORT);
    connectDB()
})