const mongoose=requrie('mongoose')


const jobSchema=new mongoose.Schema({
    recid:String,
    companyname:recid.companyname,
    jobtype:{
        type:String,
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