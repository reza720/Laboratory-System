const TechnicianRouter=require("./technicianRouter");
const TestRouter=require("./testRouter");
const ClientRouter=require("./clientRouter");
const ReportRouter=require("./reportRouter");
const express=require("express");
const router=express.Router();

router.use("/technicians",TechnicianRouter);
router.use("/tests",TestRouter);
router.use("/clients",ClientRouter);
router.use("/reports",ReportRouter);

module.exports=router;