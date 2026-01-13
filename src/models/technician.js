const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Technician=sequelize.define("Technician",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING, allowNull:false},
    phone:{type:DataTypes.STRING, allowNull:false},
},{
    timestamps:true, 
    indexes:[
        {fields:["name"]},
        {fields:["email"]}
    ]
});
module.exports=Technician;