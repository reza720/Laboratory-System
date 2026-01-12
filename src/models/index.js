const sequelize=require("../config/database");

const Client=require("./client");
const Technician=require("./technician");
const Test=require("./test");
const Report=require("./report");

Technician.hasMany(Test, {foreignKey:"technicianId"});
Test.belongsTo(Technician, {foreignKey:"technicianId"});

Technician.hasMany(Report,{foreignKey:"technicianId"});
Report.belongsTo(Technician, {foreignKey:"technicianId"});

Client.hasMany(Report,{foreignKey:"clientId"});
Report.belongsTo(Client,{foreignKey:"clientId"});

Test.hasOne(Report,{foreignKey:"testId"});
Report.belongsTo(Test,{foreignKey:"testId", onDelete:"CASCADE"});

module.exports={
    Technician,
    Client,
    Test,
    Report
};





