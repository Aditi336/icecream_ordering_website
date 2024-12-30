const Bill=require("../../models/bill_model")

const bill_details=async(req,res)=>{
    try {
        const {username,phone,address,date,ordered_item,price}=req.body
        const response=await Bill.create({username,phone,address,date,ordered_item,price})
        console.log(response)
        return res.status(200).json({msg:"emial sent is successful"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg:error})
    }
}

module.exports={bill_details}