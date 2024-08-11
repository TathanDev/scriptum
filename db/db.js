import { Sequelize } from "sequelize";
import User from "../models/User.js"
import Text from "../models/Text.js";

const sequelize = new Sequelize("bdd", process.env.DB_USER, process.env.DB_PASSWORD, {


    dialect: "sqlite",
    storage: "./db.sqlite",
    logging: false,
    define: {
        freezeTableName: true,
        timestamps: false
    }

})


const db = {
    sequelize,
    User: User(sequelize),
    Text: Text(sequelize),
};

const initDB = async () => {

    try {
        await sequelize.sync({ force: false});
    } catch (error) {

        console.error(error)
    }
}

initDB();

export default db;