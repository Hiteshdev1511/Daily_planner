import express, { Application } from "express"
import cors from "cors"
import { EnvVariables } from "./types/common"
import cookieParser from "cookie-parser"
import errorHandler from "./utils/errorMiddleware"

const app: Application = express()

app.use(cors({origin:EnvVariables.CORS_ORIGIN,credentials:true}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

app.use(errorHandler)

export {app}