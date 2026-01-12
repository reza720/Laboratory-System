const {TechnicianService}=require("../services");

class TechnicianController{
    async createTechnician(req,res){
        const technician=await TechnicianService.createTechnician(req.body);
        res.status(201).json({success:true, data:technician});
    }
    async getTechnicians(req,res){
        const technician=await TechnicianService.getTechnicians();
        res.status(200).json({success:true, data:technician});
    }
    async getTechnicianById(req,res){
        const technician=await TechnicianService.getTechnicianById(req.params.id);
        res.status(200).json({success:true, data:technician});
    }
    async updateTechnician(req,res){
        const technician=await TechnicianService.updateTechnician(req.params.id, req.body);
        res.status(200).json({success:true, data:technician});
    }
    async deleteTechnician(req,res){
        await TechnicianService.deleteTechnician(req.params.id);
        res.status(204).send();
    }
}
module.exports=new TechnicianController();