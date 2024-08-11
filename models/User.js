import { DataTypes } from "sequelize";

export default function (bdd) {

    const User = bdd.define(
        "Users",
        {
            
            id_user: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            pseudo_user: {
                type: DataTypes.STRING(255),
                allowNull: false,
                unique: true,
            },
            mail_user: {
                type: DataTypes.STRING(255),
                allowNull: false,
                unique: true,
            },
            password_user: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
        },
        {
            tableName: "Users",
        }
    );

    return User
}