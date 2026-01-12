const {ClientController}=require("../controllers");
const express=require("express");
const router=express.Router();

router.post("/",ClientController.createClient);
router.get("/",ClientController.getClients);
router.get("/:id",ClientController.getClientById);
router.put("/:id", ClientController.updateClient);
router.delete("/:id",ClientController.deleteClient);

module.exports=router;