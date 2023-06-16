const mongoose= require('mongoose');
const employeeSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    position:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        
    }
   
})
const empModel = mongoose.model('employeedb',employeeSchema)
module.exports=empModel