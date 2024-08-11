import jwt from "jsonwebtoken"

export const addText = async (req, res) => {

  jwt.verify(req.cookies.user, process.env.CHAINE_JWT, (err, decoder) => {
    if(err) {
        res.clearCokkie("user");
        res.redirect("/home")
    } else {

      req.User.findOne({ where: { id_user: decoder.userId } })
      .then((user) => {

        req.Text.create({
          text_title: req.body.text_title,
          text_content: req.body.text_content,
          text_type: req.body.text_type,
          text_author: user.pseudo_user
        })
          .then((text) => {
            res.json({ textAdded: true, textId: text.text_id })
          })
          .catch((error) =>
            res.json({ textAdded: false, reason: "", errorMsg: error })
          );
      })
      /** Catch user not existing error */
      .catch((error) => {
        console.error(error);
        res.json({ textAdded: false });
      });
    }
  })
};

