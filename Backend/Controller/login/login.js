require('dotenv').config()
const Router=require("router")
const router=Router()
const bcrypt=require('bcrypt')
const User=require('../../Model/singupschema')



router.get('/',(req,res)=>{
    res.status(200).json({msg:"This is login page."})
})

router.post('/',async(req,res)=>{
    const {email,password}=req.body
    const login= new User()
    const data=await login.findOne({email:email})
    if(!data){
     return res.status(500).json({msg:"User not found."});
    }
    if(await bcrypt.compareSync(password,data.password)){
        data.password="";
       return res.status(200).send(data);
    }
    
    

    


   

})

module.exports=router;
