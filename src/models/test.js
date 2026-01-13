const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Test=sequelize.define("Test",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false},
    description:{type:DataTypes.TEXT, allowNull:false},
    sampleType:{type:DataTypes.STRING, allowNull:false},
    technicianId:{type:DataTypes.INTEGER, allowNull:false},
    price:{type:DataTypes.DECIMAL(10,2),allowNull:false},
    date:{type:DataTypes.DATEONLY, allowNull:false},
},{
    timestamps:true 
});
module.exports=Test;