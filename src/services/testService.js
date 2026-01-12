const {Test, Technician}=require("../models");

class TestService{
    static async createTest(data){
        return await Test.create(data);
    }
    static async getTests(){
        return await Test.findAll({include:[
            {model:Technician, attributes:["id","name","email"]}
        ]});
    }
    static async getTestById(id){
        const target=await Test.findByPk(id,{include:[
            {model:Technician, attributes:["id","name","email"]}
        ]});
        if(!target){
            throw new Error("Test not found");
        }
        return target;
    }
    static async updateTest(id,data){
        await this.getTestById(id);
        await Test.update(data,{where:{id}});
        return await this.getTestById(id);
    }
    static async deleteTest(id){
        await this.getTestById(id);
        await Test.destroy({where:{id}});
        return {message:"deleted"};
    }
}
module.exports=TestService;