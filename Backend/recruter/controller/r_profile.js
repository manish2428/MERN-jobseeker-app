const Router=require('router')
const router=Router()
const Rprofile=require('../model/r_profilemodel')


router.get('/',(req,res)=>{
    res.json({msg:"This is profile of recrutetr"})
})

router.post('/',(req,res)=>{
    if(!req.body){
        return res.json({err:"All fields are required."})
    }
    const rprofile=new Rprofile(req.body)
    rprofile.save()
    .then(()=>{
        res.json({"msg":"Data saved successfully."})
    })
    .catch((e)=>{
        res.json({"err":e})
    })
       
})

module.exports=router;
