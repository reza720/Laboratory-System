const {TestService}=require("../services");

class TestController{
    static async createTest(req,res,next){
        try{
            const test=await TestService.createTest(req.body);
            res.status(201).json({success:true, data:test});
        }
        catch(error){
            next(error);
        }
    }
    static async getTests(req,res,next){
        try{
            const test=await TestService.getTests();
            res.status(200).json({success:true, data:test});
        }
        catch(error){
            next(error);
        }
    }
    static async getTestById(req,res,next){
        try{
            const test=await TestService.getTestById(req.params.id);
            res.status(200).json({success:true, data:test});
        }
        catch(error){
            next(error);
        }
    }
    static async updateTest(req,res,next){
        try{
            const test=await TestService.updateTest(req.params.id, req.body);
            res.status(200).json({success:true, data:test});
        }
        catch(error){
            next(error);
        }
    }
    static async deleteTest(req,res,next){
        try{
            await TestService.deleteTest(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports= TestController;