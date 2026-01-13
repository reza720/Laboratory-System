const {body,validationResult}=require("express-validator");

const ValidateClient=[
    body("name").notEmpty().withMessage("name cannot be empty").matches(/^[a-zA-Z ]+$/).withMessage("name should only contains letters and space"),
    body("age").isInt({min:1, max:130}).withMessage("age should be between 1 and 130").notEmpty().withMessage("age can not be empty"),
    body("gender").notEmpty().withMessage("gender cannot be empty").isIn(["male","female"]).withMessage("gender should be either male or female"),
    
]