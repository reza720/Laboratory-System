const {Report,Test,Technician,Client}=require("../models");

class ReportService{
    static async createReport(data){
        return await Report.create(data);
    }
    static async getReports(){
        return await Report.findAll({include:[
            {model:Test, attributes:["id","name","technicianId","date"]},
            {model:Technician, attributes:["id","name","email"]},
            {model:Client, attributes:["id","name","phone"]}
        ]});
    }
    static async getReportById(id){
        const target=await Report.findByPk(id,{include:[
            {model:Test, attributes:["id","name","technicianId","date"]},
            {model:Technician, attributes:["id","name","email"]},
            {model:Client, attributes:["id","name","phone"]}
        ]});
        if(!target){
            throw new Error("Report not found");
        }
        return target;
    }
    static async updateReport(id,data){
        await this.getReportById(id);
        await Report.update(data,{where:{id}});
        return await this.getReportById(id);
    }
    static async deleteReport(id){
        await this.getReportById(id);
        await Report.destroy({where:{id}});
        return {message:"Deleted"};
    }
}
module.exports=ReportService;