const {TechnicianController}=require("../controllers");
const {TechnicianValidation}=require("../middlewares/validation");
const express=require("express");
const router=express.Router();

router.post("/",TechnicianValidation.rules,TechnicianValidation.errorHandler,TechnicianController.createTechnician);
router.get("/",TechnicianController.getTechnicians);
router.get("/:id",TechnicianController.getTechnicianById);
router.put("/:id", TechnicianValidation.rules,TechnicianValidation.errorHandler,TechnicianController.updateTechnician);
router.delete("/:id",TechnicianController.deleteTechnician);

module.exports=router;