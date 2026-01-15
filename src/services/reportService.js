const {Report,Test,Technician,Client}=require("../models");

class ReportService{
    async createReport(data){
        return Report.create(data);
    }
    async getReports(){
        return Report.findAll({include:[
            {model:Test, attributes:["id","name","technicianId","date"]},
            {model:Technician, attributes:["id","name","email"]},
            {model:Client, attributes:["id","name","phone"]}
        ]});
    }
    async getReportById(id){
        const target=await Report.findByPk(id,{include:[
            {model:Test, attributes:["id","name","technicianId","date"]},
            {model:Technician, attributes:["id","name","email"]},
            {model:Client, attributes:["id","name","phone"]}
        ]});
        if(!target){
            const err=new Error("Report not found");
            err.status=404;
            throw err;
        }
        return target;
    }
    async updateReport(id,data){
        const report=await this.getReportById(id);
        await report.update(data);
        return report;
    }
    async deleteReport(id){
        const report=await this.getReportById(id);
        await report.destroy();
        return {message:"Deleted"};
    }
}
module.exports=new ReportService();