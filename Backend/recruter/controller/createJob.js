const Router=requrire('router')
const router=Router()
const Job=require('../model/createJobmodel')


router.get('/',(req,res)=>{
    res.send("This is job pannel")
})

router.post('/',(req,res)=>{
    if(!req.body){
        return res.json({error:"All fields are required."})
    }
    const job=new Job(req.body)
    job.save()
    .then(()=>{
        res.json({msg:"Data saved successfully."})
    })
    .catch((e)=>{
        res.json({msg:`Error occured while saving the data  ${e}`})
    })

})

module.exports=router;