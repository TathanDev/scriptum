import jwt from "jsonwebtoken"

export const createTokenJWT = (req, res, userId, userPseudo) => {
    const tokenJWT = jwt.sign({ userId: userId, userPseudo: userPseudo}, process.env.CHAINE_JWT, {expiresIn: "72h"})
    return res.cookie("user", tokenJWT, {
        maxAge: 100 * 60 * 60 * 24 * 3,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.ENV_NODE === "production",
    });
};