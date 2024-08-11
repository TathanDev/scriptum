import express from "express";
import { accueil, createAccount, createDocumentation, login, addText, seeText, seeAccount } from "../controllers/controllerPage.js";

const router = express.Router()

router.get("/home", accueil)
router.get("/register", createAccount)
router.get("/login", login)
router.get("/add-text", addText)

router.get("/doc", createDocumentation)
router.get("/text/:id", seeText)
router.get("/account/:id", seeAccount)

export default router