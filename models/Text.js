import { DataTypes } from "sequelize";

export default function (bdd) {

    const User = bdd.define(
        "Texts",
        {
            
            text_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            text_title: {
                type: DataTypes.STRING(255),
                allowNull: false,
                unique: true,
            },
            text_content: {
                type: DataTypes.TEXT,
                allowNull: false,
                unique: true,
            },
            text_type: {
                type: DataTypes.ENUM("Poems", "Story", "Music", "Joke", "Theater", "Other"),
                allowNull: false
            },
            text_author: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: "Texts",
        }
    );

    return User
}