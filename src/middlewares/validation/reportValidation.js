const {body, validationResult}=require("express-validator");

const ReportValidation={
    rules:[
        body("result")
            .notEmpty().withMessage("result is required"),
        body("date")
            .notEmpty().withMessage("date is required")
    ],
    errorHandler:(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const err=new Error("Validation failed");
            err.status=400;
            err.errors=errors.array();
            return next(err);
        }
        next();
    }
};
module.exports= ReportValidation;
