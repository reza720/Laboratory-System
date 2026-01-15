const {body, validationResult}=require("express-validator");

const ClientValidation={
    rules:[
        body("name")
            .trim()
            .notEmpty().withMessage("name is required")
            .matches(/^[a-zA-Z ]+$/).withMessage("name should be letters and space"),
        body("age")
            .notEmpty().withMessage("age is required")
            .isInt({min:1,max:140}).withMessage("age is should be between 1 and 140"),
        body("phone")
            .trim()
            .notEmpty().withMessage("phone number is required")
            .isLength({min:10,max:10}).withMessage("phone number must be 10 digits")
            .isNumeric().withMessage("phone number must be digits")
    ],
    errorHandler:(req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            const err=new Error("validation failed");
            err.status=400;
            err.errors=errors.array();
            return next(err);
        }
        next();
    }
};
module.exports=ClientValidation;