const {TestService}=require("../services");

class TestController{
    async createTest(req,res){
        const test=await TestService.createTest(req.body);
        res.status(201).json({success:true, data:test});
    }
    async getTests(req,res){
        const test=await TestService.getTests();
        res.status(200).json({success:true, data:test});
    }
    async getTestById(req,res){
        const test=await TestService.getTestById(req.params.id);
        res.status(200).json({success:true, data:test});
    }
    async updateTest(req,res){
        const test=await TestService.updateTest(req.params.id, req.body);
        res.status(200).json({success:true, data:test});
    }
    async deleteTest(req,res){
        await TestService.deleteTest(req.params.id);
        res.status(204).send();
    }
}
module.exports= new TestController();