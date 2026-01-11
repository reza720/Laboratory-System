const sequelize=require("../config/database");
const {DataTypes}=require("sequelize");

const Client=sequelize.define("Client",{
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
    age:{type:DataTypes.INTEGER, allowNull:false, validate:{
        min:{
            args:[1],
            msg:"age not be negative",
        },
        max:{
            args:[140],
            msg:"age not be more then 140",
        }
    }},
    gender:{type:DataTypes.ENUM("male","female"), allowNull:false},
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
        {fields:["name"]}
    ]
});
module.exports=Client;