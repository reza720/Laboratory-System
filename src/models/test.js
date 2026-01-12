const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Test=sequelize.define("Test",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false, validate:{
        notEmpty:{
            args:true,
            msg:"name can not be empty",
        }
    }},
    description:{type:DataTypes.TEXT, allowNull:false, validate:{
        notEmpty:{
            args:true,
            msg:"description can not be empty"
        }
    }},
    sampleType:{type:DataTypes.STRING, allowNull:false, validate:{
        notEmpty:{
            args:true,
            msg:"sample can not be empty",
        }
    }},
    technicianId:{type:DataTypes.INTEGER, allowNull:false},
    price:{type:DataTypes.DECIMAL(10,2),allowNull:false, validate:{
        min:{
            args:[0],
            msg:"price can not be negative",
        }
    }},
    date:{type:DataTypes.DATEONLY, allowNull:false},
},{
    timestamps:true 
});
module.exports=Test;