const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Client=sequelize.define("Client",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false},
    age:{type:DataTypes.INTEGER, allowNull:false},
    gender:{type:DataTypes.ENUM("male","female"), allowNull:false},
    phone:{type:DataTypes.STRING, allowNull:false},
},{
    timestamps:true,
    indexes:[
        {fields:["name"]}
    ]
});
module.exports=Client;