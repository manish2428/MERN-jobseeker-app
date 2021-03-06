const mongoose=require('mongoose')


const jobSchema=new mongoose.Schema({
    recid:String,
    
    jobtype:{
        type:String,
        required:true
    },

    lastDate:{
        type:Date,
        required:true
    },

    jobRole:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    jobDescription:{
        type:String,
        required:true
    },
    skillsRequired:{
        type:String,
        required:false
    }


})
module.exports=mongoose.model('JobDesc',jobSchema)