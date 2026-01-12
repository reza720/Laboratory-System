const {Technician}=require("../models");

class TechnicianService{
    static async createTechnician(data){
        return await Technician.create(data);
    }
    static async getTechnicians(){
        return await Technician.findAll();
    }
    static async getTechnicianById(id){
        const target=await Technician.findByPk(id);
        if(!target){
            throw new Error("Technician not found");
        }
        return target;
    }
    static async updateTechnician(id,data){
        await this.getTechnicianById(id);
        await Technician.update(data,{where:{id}});
        return await this.getTechnicianById(id);
    }
    static async deleteTechnician(id){
        await this.getTechnicianById(id);
        await Technician.destroy({where:{id}});
        return {message:"deleted"};
    }
}
module.exports=TechnicianService;