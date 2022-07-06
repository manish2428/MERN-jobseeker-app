const Profile=require("../../Model/profilemodel")
const Router=require('router')
const router=Router()


router.get('/',(req,res)=>{
    res.send("THIS IS PROFILE PAGE.");
})

module.exports=router;