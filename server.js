import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import router from "./routers/routerPage.js"
import { accessibilityDB } from './middlewares/accessibilityDB.js'
import db from './db/db.js'
import routeurUser from './routers/routerUser.js'
import routeurText from './routers/routerText.js'
import apiRouteur from './routers/routeurApi.js'


dotenv.config()

const PORT = 25568
const app = express()

app.use(
    cors({
        origin: "*",
        options: "GET,POST,PATCH,PUT,DELETE",
        allowedHeaders: true,
        credentials: true
    })
)

app.use(express.json())

app.use("/", express.static(path.join(process.cwd(), "public")))
app.use("/public", express.static(path.join(process.cwd(), "public/elements")))
app.use("/data", express.static(path.join(process.cwd(), "public/data")))
app.set("view engine", "ejs")

app.use(cookieParser())
app.use(accessibilityDB(db))

app.use("/", router)
app.use("/user", routeurUser)
app.use("/text", routeurText)
app.use("/api", apiRouteur)

app.listen(PORT, () => console.log("Server Up | http://localhost:" + PORT+ "/home"))