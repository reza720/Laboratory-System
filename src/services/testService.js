const {Test, Technician}=require("../models");

class TestService{
    async createTest(data){
        return Test.create(data);
    }
    async getTests(){
        return Test.findAll({include:[
            {model:Technician, attributes:["id","name","email"]}
        ]});
    }
    async getTestById(id){
        const target=await Test.findByPk(id,{include:[
            {model:Technician, attributes:["id","name","email"]}
        ]});
        if(!target){
            const err=new Error("Test not found");
            err.status=404;
            throw err;
        }
        return target;
    }
    async updateTest(id,data){
        const test=await this.getTestById(id);
        await test.update(data);
        return test;
    }
    async deleteTest(id){
        const test=await this.getTestById(id);
        await test.destroy();
        return {message:"deleted"};
    }
}
module.exports=new TestService();