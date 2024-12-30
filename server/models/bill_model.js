const {Schema,model}=require('mongoose')

const billSchema=new Schema({
    username:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    date:{
        type:String,
        require:true,
    },
    ordered_item:[
        {
            item:String,
            price:Number,
            amount:Number
        }
    ],
    price:{
        type:String,
        require:true
    }
    
},{timestamps:true})

const Bill=new model("Bill",billSchema)
module.exports=Bill