const express=require('express')
const router=express.Router()
const bill_controllers=require("./controller/bill_controller")
const Schema=require('../validators/auth_validator')
const validate=require("../middleware/validate_middleware")
// const 

router.
    route("/bill")
    // validate.validate(Schema.billSchema),
    .post(bill_controllers.bill_details)
module.exports=router