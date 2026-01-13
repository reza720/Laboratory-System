const {ClientService}=require("../services");

class ClientController{
    async createClient(req,res,next){
        try{
            const client=await ClientService.createClient(req.body);
            res.status(201).json({success:true, data:client});
        }
        catch(error){
            next(error);
        }
    }
    async getClients(req,res,next){
        try{
            const client=await ClientService.getClients();
            res.status(200).json({success:true, data:client});
        }
        catch(error){
            next(error);
        }
    }
    async getClientById(req,res,next){
        try{
            const client=await ClientService.getClientById(req.params.id);
            res.status(200).json({success:true, data:client});
        }
        catch(error){
            next(error);
        }
    }
    async updateClient(req,res,next){
        try{
            const client=await ClientService.updateClient(req.params.id, req.body);
            res.status(200).json({success:true, data:client});
        }
        catch(error){
            next(error);
        }
    }
    async deleteClient(req,res,next){
        try{
            await ClientService.deleteClient(req.params.id);
            res.status(204).send();
        }
        catch(error){
            next(error);
        }
    }
}
module.exports= new ClientController();