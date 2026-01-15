const {body, validationResult}=require("express-validator");
const { errorHandler } = require("./reportValidation");

const TestValidation={
    rules:[
        body("name")
            .trim()
            .notEmpty().withMessage("name is required"),
        body("sampleType")
            .trim()    
            .notEmpty().withMessage("smaple type is required"),
        body("price")
            .notEmpty().withMessage("price is required")
            .isFloat({min:0, max:1000}).withMessage("price should be between 0 and 1000"),
        body("date")
            .notEmpty().withMessage("date is required")
            .isDate().withMessage("valid date is required")
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
module.exports=TestValidation;