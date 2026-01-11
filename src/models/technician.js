const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Technician=sequelize.define("Technician",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    name:{type:DataTypes.STRING, allowNull:false, validate:{
        notEmpty:{
            args:true,
            msg:"name can not be empty",
        },
        is:{
            args:[/^[a-zA-Z ]+$/],
            msg:"name should be letters and space",
        }
    }},
    email:{type:DataTypes.STRING, allowNull:false, validate:{
        isEmail:{
            args:true,
            msg:"Not valid email",
        },
        notEmpty:{
            args:true,
            msg:"Email cannot be empty",
        }
    }},
    phone:{type:DataTypes.STRING, allowNull:false, validate:{
        isNumeric:{
            args:true,
            msg:"phone number must be digits",
        },
        len:{
            args:[10,10],
            msg:"phone number must be 10 digits",
        }
    }},
},{
    timestamps:true, 
    indexes:[
        {fields:["name"]},
        {fields:["email"]}
    ]
});
module.exports=Technician;