// import { Sequelize, DataType } from "sequelize"

const tableStruct = (sequelize, DataTypes) => {
    return sequelize.define("student", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rollNo: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}

export default tableStruct;