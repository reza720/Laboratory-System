const {Sequelize}=require("sequelize");

const sequelize=new Sequelize(
    "Laboratory_System",
    "root",
    "root",
    {
        host:"localhost",
        dialect:"mysql",
        logging:false
    }
);
module.exports=sequelize;