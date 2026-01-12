const {ReportController}=require("../controllers");
const express=require("express");
const router=express.Router();

router.post("/",ReportController.createReport);
router.get("/",ReportController.getReports);
router.get("/:id",ReportController.getReportById);
router.put("/:id", ReportController.updateReport);
router.delete("/:id",ReportController.deleteReport);

module.exports=router;