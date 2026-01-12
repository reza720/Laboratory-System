const {TestController}=require("../controllers");
const express=require("express");
const router=express.Router();

router.post("/",TestController.createTest);
router.get("/",TestController.getTests);
router.get("/:id",TestController.getTestById);
router.put("/:id", TestController.updateTest);
router.delete("/:id",TestController.deleteTest);

module.exports=router;