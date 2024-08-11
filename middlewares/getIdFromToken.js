import jwt from "jsonwebtoken"

export const tokenJWT = (req, res, next) => {
    if(req.cookies.user) {
        jwt.verify(req.cookies.user, process.env.CHAINE_JWT, (err, decoder) => {

            if(err) {
                res.clearCokkie("user");
                res.redirect("/")
            } else {
                req.userId = decoder.userId
            }
            next()
        })
        next()
    }

}