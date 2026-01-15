const {body,validationResult}=require("express-validator");
const { errorHandler } = require("./reportValidation");

const TechnicianValidation={
    rules:[
        body("name")
            .trim()
            .notEmpty().withMessage("name is required")
            .matches(/^[a-zA-Z ]+$/).withMessage("name must be letters and space"),
        body("email")
            .trim()
            .notEmpty().withMessage("email is required")
            .isEmail().withMessage("valid email is required"),
        body("phone")
            .trim()
            .notEmpty().withMessage("phone number is required")
            .isLength({min:10,max:10}).withMessage("phone number must be 10 digits")
            .isNumeric().withMessage("phone number must be digits")
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
module.exports=TechnicianValidation;
