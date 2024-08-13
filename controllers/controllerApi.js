import jwt from "jsonwebtoken"


export const getText = async (req, res) => {

  const id = req.params.id
  
  req.Text.findOne({ where: { text_id: id } })
      .then((text) => {
        res.json({text, textExist: true})
      })
      .catch((error) =>
        res.status(404).json({ textExist: false, error: error })
      );
};

export const getUserInfo = async (req, res) => {

  const userId = req.params.id
  

      req.User.findOne({ where: {id_user: userId}})
      .then((user) => {
        req.Text.findAll({where: { text_author: user.pseudo_user}})
        .then((texts) => {
          res.json({user: user, texts: texts})
        })
      }).catch((error) => {
        res.json({error: error})
      })
    
};

export const getUserInfoFromPseudo = async (req, res) => {

  const pseudo = req.params.pseudo
  
  req.User.findOne({ where: {pseudo_user: pseudo}})
      .then((user) => {
        res.json({pseudo_user: user.pseudo_user, id_user: user.id_user})
      }).catch((error) => {
        res.json({error: error})
      })
};


export const getUserId = async (req, res) => {

  const cookie = req.params.cookie
  
  jwt.verify(cookie, process.env.CHAINE_JWT, (err, decoder) => {
    if(err) {
      res.status(404).json({userId: 1, userPseudo: "TATHAN"})
    } else {
      res.json({userId: decoder.userId, userPseudo: decoder.userPseudo})
    }
  })

};

export const getTexts = async (req, res) => {

  const type = req.params.type
  
  req.Text.findAll({ where: { text_type: type } })
      .then((texts) => {
        res.json({texts, textsExist: true})
      })
      .catch((error) =>
        res.status(404).json({ textsExist: false, error: error })
      );
};