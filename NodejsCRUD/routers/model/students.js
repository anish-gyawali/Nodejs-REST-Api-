const mongoose=require('mongoose')

const studentSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    major:{
        type:String,
        required:true
    },
    studentWorker:{
        type:Boolean,
        required:true,
        default:false
    }
})

module.exports=mongoose.model('Student',studentSchema)