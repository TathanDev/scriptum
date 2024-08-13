import express from "express";
import { getText, getTexts, getUserId, getUserInfo, getUserInfoFromPseudo } from "../controllers/controllerApi.js";

const apiRouteur = express.Router()
apiRouteur.get("/get-text/:id", getText)
apiRouteur.get("/get-texts/:type", getTexts)

apiRouteur.get("/get-user/:id", getUserInfo)
apiRouteur.get("/get-userid/:cookie", getUserId)
apiRouteur.get("/get-user/pseudo/:pseudo", getUserInfoFromPseudo)

export default apiRouteur