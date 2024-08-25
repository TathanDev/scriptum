import express from "express";
import { accueil, createAccount, createDocumentation, login, addText, seeText, seeAccount, browseText, cgu, modifyAccount } from "../controllers/controllerPage.js";

const router = express.Router()

router.get("/home", accueil)
router.get("", accueil)

router.get("/register", createAccount)
router.get("/login", login)
router.get("/add-text", addText)

router.get("/doc", createDocumentation)
router.get("/text/:id", seeText)
router.get("/account/:id", seeAccount)
router.get("/browse", browseText)
router.get("/cgu", cgu)
router.get("/modify/account", modifyAccount)

export default router