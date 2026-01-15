const express=require("express");
const app=express();
const router=require("./routers");
const globalErrorHandler=require("../src/middlewares/globalErrorHandler");

app.use(express.json());
app.use("/api",router);
app.use((req,res,next)=>{
    res.status(404).json({message:"route not found"});
});
app.use(globalErrorHandler);
module.exports=app;