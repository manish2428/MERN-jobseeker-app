const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userid: String,
  ten: [
    {
     tenboard: {
        type: String,
        required: true,
      },
      tenpassyear: {
        type: String,
        required: true,
      },
      tenpercentage: {
        type: String,
        required: true,
      },
      tenschoolname: {
        type: String,
        required: true,
      },
    },
  ],
  twelve: [
    {
     twelveboard: {
        type: String,
        required: true,
      },
      twelvepassyear: {
        type: String,
        required: true,
      },
      twelvepercentage: {
        type: String,
        required: true,
      },
      twelveschoolname: {
        type: String,
        required: true,
      },
    },
  ],
  bachlor: [
    {
        B_course:{
            type:String,
            required:true,
        },
        B_passyear:{
            type:String,
            required:true,
        },
        B_percentage:{
            type:String,
            required:true,
        },
       B_collegename:{
            type:String,
            requried:true,
        }

    }
  ],
  masters:[
    {
        M_course:{
            type:String,
        },
        M_passyear:{
            type:String,
        },
        M_percentage:{
            type:String,
        },
        M_collegename:{
            type:String,
        }
    }
  ]
});

module.exports=mongoose.model("Profile",profileSchema);
