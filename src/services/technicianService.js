const {Technician}=require("../models");

class TechnicianService{
    async createTechnician(data){
        return Technician.create(data);
    }
    async getTechnicians(){
        return Technician.findAll();
    }
    async getTechnicianById(id){
        const target=await Technician.findByPk(id);
        if(!target){
            const err=new Error("Technician not Found");
            err.status=404;
            throw err;
        }
        return target;
    }
    async updateTechnician(id,data){
        const technician=await this.getTechnicianById(id);
        await technician.update(data);
        return technician;
    }
    async deleteTechnician(id){
        const technician=await this.getTechnicianById(id);
        await technician.destroy();
        return {message:"deleted"};
    }
}
module.exports=new TechnicianService();