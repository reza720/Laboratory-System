const {ReportService}=require("../services");

class ReportController{
    async createReport(req,res,next){
        try{
            const report=await ReportService.createReport(req.body);
            res.status(201).json({success:true, data:report});
        }
        catch(error){
            next(error);
        }
    }
    async getReports(req,res,next){
        try{
            const report=await ReportService.getReports();
            res.status(200).json({success:true, data:report});
        }
        catch(error){
            next(error);
        }
    }
    async getReportById(req,res,next){
        try{
            const report=await ReportService.getReportById(req.params.id);
            res.status(200).json({success:true, data:report});
        }
        catch(error){
            next(error);
        }
    }
    async updateReport(req,res,next){
        try{
            const report=await ReportService.updateReport(req.params.id, req.body);
            res.status(200).json({success:true, data:report});
        }
        catch(error){
            next(error);
        }
    }
    async deleteReport(req,res,next){
        try{
            await ReportService.deleteReport(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports=new ReportController();