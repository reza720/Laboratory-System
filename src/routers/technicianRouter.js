const {TechnicianController}=require("../controllers");
const express=require("express");
const router=express.Router();

router.post("/",TechnicianController.createTechnician);
router.get("/",TechnicianController.getTechnicians);
router.get("/:id",TechnicianController.getTechnicianById);
router.put("/:id", TechnicianController.updateTechnician);
router.delete("/:id",TechnicianController.deleteTechnician);

module.exports=router;