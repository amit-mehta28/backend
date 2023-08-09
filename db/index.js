// const { Sequelize } = require('sequelize');
import { DataTypes, Sequelize } from "sequelize"
import tableStruct from "../model/index.js";


const sequelize = new Sequelize('amit', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
});



(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();


let db = {}
db.sequelize = sequelize
db.student = tableStruct(sequelize, DataTypes )

db.sequelize.sync({force : true})

export default db;