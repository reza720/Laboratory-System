const {ClientService}=require("../services");

class ClientController{
    static async createClient(req,res,next){
        try{
            const client=await ClientService.createClient(req.body);
            res.status(201).json({success:true, data:client});
        }
        catch(error){
            next(error);
        }
    }
    static async getClients(req,res,next){
        try{
            const client=await ClientService.getClients();
            res.status(200).json({success:true, data:client});
        }
        catch(error){
            next(error);
        }
    }
    static async getClientById(req,res,next){
        try{
            const client=await ClientService.getClientById(req.params.id);
            res.status(200).json({success:true, data:client});
        }
        catch(error){
            next(error);
        }
    }
    static async updateClient(req,res,next){
        try{
            const client=await ClientService.updateClient(req.params.id, req.body);
            res.status(200).json({success:true, data:client});
        }
        catch(error){
            next(error);
        }
    }
    static async deleteClient(req,res,next){
        try{
            await ClientService.deleteClient(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports=ClientController;