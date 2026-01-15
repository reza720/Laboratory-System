const {Client}=require("../models");

class ClientService{
    async createClient(data){
        return Client.create(data);
    }
    async getClients(){
        return Client.findAll();
    }
    async getClientById(id){
        const target=await Client.findByPk(id);
        if(!target){
            const err=new Error("Client not found");
            err.status=404;
            throw err;
        }
        return target;
    }
    async updateClient(id,data){
        const client=await this.getClientById(id);
        await client.update(data);
        return client;
    }
    async deleteClient(id){
        const client=await this.getClientById(id);
        await client.destroy();
        return {message:"deleted"};
    }
}
module.exports= new ClientService();
