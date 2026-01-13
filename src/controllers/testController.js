const {TestService}=require("../services");

class TestController{
    async createTest(req,res,next){
        try{
            const test=await TestService.createTest(req.body);
            res.status(201).json({success:true, data:test});
        }
        catch(error){
            next(error);
        }
    }
    async getTests(req,res,next){
        try{
            const test=await TestService.getTests();
            res.status(200).json({success:true, data:test});
        }
        catch(error){
            next(error);
        }
    }
    async getTestById(req,res,next){
        try{
            const test=await TestService.getTestById(req.params.id);
            res.status(200).json({success:true, data:test});
        }
        catch(error){
            next(error);
        }
    }
    async updateTest(req,res,next){
        try{
            const test=await TestService.updateTest(req.params.id, req.body);
            res.status(200).json({success:true, data:test});
        }
        catch(error){
            next(error);
        }
    }
    async deleteTest(req,res,next){
        try{
            await TestService.deleteTest(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports= new TestController();