const {TechnicianService}=require("../services");

class TechnicianController{
    static async createTechnician(req,res,next){
        try{
            const technician=await TechnicianService.createTechnician(req.body);
            res.status(201).json({success:true, data:technician});
        }
        catch(error){
            next(error);
        }
    }
    static async getTechnicians(req,res,next){
        try{
            const technician=await TechnicianService.getTechnicians();
            res.status(200).json({success:true, data:technician});
        }
        catch(error){
            next(error);
        }
    }
    static async getTechnicianById(req,res,next){
        try{
            const technician=await TechnicianService.getTechnicianById(req.params.id);
            res.status(200).json({success:true, data:technician});
        }
        catch(error){
            next(error);
        }
    }
    static async updateTechnician(req,res,next){
        try{
            const technician=await TechnicianService.updateTechnician(req.params.id, req.body);
            res.status(200).json({success:true, data:technician});
        }
        catch(error){
            next(error);
        }
    }
    static async deleteTechnician(req,res,next){
        try{
            await TechnicianService.deleteTechnician(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports=TechnicianController;