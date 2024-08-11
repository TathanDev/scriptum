import express from 'express'
import { addText } from '../controllers/controllerText.js'

const routeurText = express.Router()
routeurText.post("/add-text", addText)

export default routeurText