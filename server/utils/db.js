const mongoose=require("mongoose")
// const URI=process.env.MONGODB_URI
const URI="mongodb://127.0.0.1:27017/polar_bear"

const connectDb=async()=>{
    try {
        await mongoose.connect(URI)
        console.log("connection successful")
        
    } catch (error) {
        console.log(error)
        process.exit(0)
    }
}

module.exports=connectDb