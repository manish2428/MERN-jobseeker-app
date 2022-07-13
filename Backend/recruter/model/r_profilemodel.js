const mongoose=require('mongoose')


const profileSchema=mongoose.Schema({
recid:{
    type:String,
    required:true
},
rec_description:{
    type:String,
    required:true
},
rec_designation:{
    type:String,
    required:true
},
company_name:{
    type:String,
    required:true
},
years_of_exp:{
    type:String,
    required:true
}

})

module.exports=mongoose.model("Rec-profile",profileSchema)