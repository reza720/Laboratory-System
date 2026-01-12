const {ReportService}=require("../services");

class ReportController{
    async createReport(req,res){
        const report=await ReportService.createReport(req.body);
        res.status(201).json({success:true, data:report});
    }
    async getReports(req,res){
        const report=await ReportService.getReports();
        res.status(200).json({success:true, data:report});
    }
    async getReportById(req,res){
        const report=await ReportService.getReportById(req.params.id);
        res.status(200).json({success:true, data:report});
    }
    async updateReport(req,res){
        const report=await ReportService.updateReport(req.params.id, req.body);
        res.status(200).json({success:true, data:report});
    }
    async deleteReport(req,res){
        await ReportService.deleteReport(req.params.id);
        res.status(204).send();
    }
}
module.exports=new ReportController();