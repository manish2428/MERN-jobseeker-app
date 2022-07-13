const Router = require("router");
const router = Router();
const Job=require('../model/createJobmodel')


router.get('/',(req,res)=>{
    res.send("Recruter can post jobs here")
})

router.post('/',(req,res)=>{
    if(!req.body){
        return res.json({error:"All fields are required."})
    }
    const job=new Job(req.body)
    job.save()
    .then((data)=>{
        res.json({msg:`Data saved successfully. \n data:  ${data}`})
    })
    .catch((e)=>{
        res.json({msg:`Error occured while saving the data  ${e}`})
    })

})

module.exports=router;