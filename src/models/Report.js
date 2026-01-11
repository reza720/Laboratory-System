const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Report=sequelize.define("Report",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    testId:{type:DataTypes.INTEGER, allowNull:false},
    technicianId:{type:DataTypes.INTEGER, allowNull:false},
    clientId:{type:DataTypes.INTEGER, allowNull:false},
    result:{type:DataTypes.STRING, allowNull:false, validate:{
        notEmpty: { msg: "Result cannot be empty" }
    }},
    date:{type:DataTypes.DATEONLY, allowNull:false},
},{
    timestamps:true
});
module.exports=Report;