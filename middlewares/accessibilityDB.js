export const accessibilityDB = (bdd) => {

    return (req, res, next) => {

        const { sequelize, User, Text} = bdd

        req.Sequelize = sequelize
        req.User = User;
        req.Text = Text
        next()
    }

}