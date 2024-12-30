const {z}=require("zod")

const signSchema=z.object({
    username:z
        .string({required_error:"Name is required"})
        .trim()
        .min(3,{message:"Name should be atleast 3 letters"})
        .max(34,{message:"Name cannot be more than 34 letters"}),
    email:z
        .string({required_error:"email is required"})
        .trim()
        .min(12,{message:"minimum length of email is 12"})
        .max(45,{message:"minimum length of email is 45"}),
    phone:z
        .string({required_error:"Phone number is required"})
        .trim()
        .min(10,{message:"number must be atleast 10"})
        .max(10,{message:"number must be atleast 10"}),
    password:z
        .string({required_error:"password is required"})
        .trim()
        .min(7,{message:"password must be atleast 7"})
        .max(7,{message:"password must be atleast 7"})
})

const loginSchema=z.object({
    email:  z
        .string({required_error:"incorrect email"})
        .trim()
        .min(10,{message:"email atleast 7"})
        .max(244,{message:"enter email less than 244"}),
    password:  z
        .string({required_error:"incorrect password"})
        .trim()
        .min(5,{message:"password atleast 7"})
        .max(244,{message:"enter password less than 244"}),
    
})


const billSchema=z.object({
    username:z
        .string({required_error:"Name is required"})
        .trim()
        .min(3,{message:"Name should be atleast 3 letters"})
        .max(34,{message:"Name cannot be more than 34 letters"}),
    phone:z
        .string({required_error:"Phone number is required"})
        .trim()
        .min(10,{message:"number must be atleast 10"})
        .max(10,{message:"number must be atleast 10"}),
    
    

})
module.exports={signSchema,loginSchema,billSchema}