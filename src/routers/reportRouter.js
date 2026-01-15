const {ReportController}=require("../controllers");
const {ReportValidation}=require("../middlewares/validation");
const express=require("express");
const router=express.Router();

router.post("/",ReportValidation.rules,ReportValidation.errorHandler,ReportController.createReport);
router.get("/",ReportController.getReports);
router.get("/:id",ReportController.getReportById);
router.put("/:id", ReportValidation.rules,ReportValidation.errorHandler,ReportController.updateReport);
router.delete("/:id",ReportController.deleteReport);

module.exports=router;