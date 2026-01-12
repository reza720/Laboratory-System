const {ClientService}=require("../services");

class ClientController{
    async createClient(req,res){
        const client=await ClientService.createClient(req.body);
        res.status(201).json({success:true, data:client});
    }
    async getClients(req,res){
        const client=await ClientService.getClients();
        res.status(200).json({success:true, data:client});
    }
    async getClientById(req,res){
        const client=await ClientService.getClientById(req.params.id);
        res.status(200).json({success:true, data:client});
    }
    async updateClient(req,res){
        const client=await ClientService.updateClient(req.params.id, req.body);
        res.status(200).json({success:true, data:client});
    }
    async deleteClient(req,res){
        await ClientService.deleteClient(req.params.id);
        res.status(204).send();
    }
}
module.exports= new ClientController();