require('dotenv').config();

const cors=require('cors')
const express=require('express')
const errorMiddleware=require("./middleware/error_middleware")
const app=express()
const auth_router=require('./router/auth_router')
const bill_router=require('./router/bill_router')
const connectDb=require("./utils/db")

const corsOption={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true
};

app.use(cors(corsOption))
app.use(express.json())

app.use("/api/auth",auth_router)
app.use("/api/recipt",bill_router)
app.use(errorMiddleware)

const PORT=5000

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`sever is listening to ${PORT}`)
    })

})
