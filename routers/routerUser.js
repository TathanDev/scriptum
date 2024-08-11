import express from 'express'
import { accountCreation, checkDisponiblity, connection, logout } from '../controllers/controllerUser.js'

const routeurUser = express.Router()
routeurUser.post("/account-creation", accountCreation)
routeurUser.get("/verify-pseudo", checkDisponiblity)
routeurUser.post("/connection", connection)
routeurUser.post("/logout", logout)

export default routeurUser