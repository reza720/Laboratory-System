const {TestController}=require("../controllers");
const {TestValidation}=require("../middlewares/validation");
const express=require("express");
const router=express.Router();

router.post("/",TestValidation.rules,TestValidation.errorHandler,TestController.createTest);
router.get("/",TestController.getTests);
router.get("/:id",TestController.getTestById);
router.put("/:id",TestValidation.rules,TestValidation.errorHandler,TestController.updateTest);
router.delete("/:id",TestController.deleteTest);

module.exports=router;