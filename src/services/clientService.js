const {Client}=require("../models");

class ClientService{
    static async createClient(data){
        return await Client.create(data);
    }
    static async getClients(){
        return await Client.findAll();
    }
    static async getClientById(id){
        const target=await Client.findByPk(id);
        if(!target){
            throw new Error("Client not found");
        }
        return target;
    }
    static async updateClient(id,data){
        await this.getClientsById(id);
        await Client.update(data,{where:{id}});
        return await this.getClientsById(id);
    }
    static async deleteClient(id){
        await this.getClientsById(id);
        await Client.destroy({where:{id}});
        return {message:"deleted"};
    }
}
module.exports= ClientService;
