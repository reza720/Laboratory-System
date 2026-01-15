const {ClientController}=require("../controllers");
const {ClientValidation}=require("../middlewares/validation");
const express=require("express");
const router=express.Router();

router.post("/",ClientValidation.rules,ClientValidation.errorHandler,ClientController.createClient);
router.get("/",ClientController.getClients);
router.get("/:id",ClientController.getClientById);
router.put("/:id",ClientValidation.rules,ClientValidation.errorHandler,ClientController.updateClient);
router.delete("/:id",ClientController.deleteClient);

module.exports=router;