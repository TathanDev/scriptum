import bcrypt from 'bcrypt'
import { createTokenJWT} from "../middlewares/createTokenJWT.js"

export const accountCreation = async (req, res) => {

    bcrypt.hash(req.body.password, 12)
    .then((hash) => {

        req.User.create({
            pseudo_user: req.body.pseudo_user,
            mail_user: req.body.mail_user,
            password_user: hash,
            
        })
        .then((user) => {
            createTokenJWT(req, res, user.id_user, user.pseudo_user);
            res.json({ accountCreated: true, accountAlreadyExist: false, user: user})
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({ accountCreated: false, error: "Register in DB", msgErreur: error})    
        })
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json({ accountCreated: false, error: "Password hash", msgErreur: error})
    })
}

export const checkDisponiblity = async (req, res) => {

    let pseudo = req.query.pseudo;

    req.User.findOne({ where: {pseudo_user: pseudo}}).then((result) => {

        if (result) {
            res.json({ disponible: false})
        } else {
            res.json({disponible: true})
        }


    })
    .catch((error) => {
        res.json({errorMsg: error, disponible: false})
    })

}

export const connection = (req, res) => {

    req.User.findOne({ where: { pseudo_user: req.body.pseudo}})
    .then((user) => {
        if(user) {

            bcrypt.compare(req.body.password, user.password_user).then((valide) => {

                if(valide) {
                    createTokenJWT(req, res, user.id_user, user.pseudo_user);
                    res.json({ connected: true})
                } else {

                    res.json({ connected: false, reason: "Auth"})
                }
            })
        } else {
            res.json({ connected: false, reason: "Auth"})
        }
    })
}

export const logout = (req, res) => {

    res.clearCookie('user')
    res.json({deconnected: true})

}