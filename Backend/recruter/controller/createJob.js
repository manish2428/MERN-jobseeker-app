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
    const job=new Job({
        recid:req.body.id,
        jobtype:req.body.jobtype,

    })
    job.save()
    .then((data)=>{
        res.json({msg:`Data saved successfully.  data:  ${data}`})
    })
    .catch((e)=>{
        res.json({msg:`Error occured while saving the data  ${e}`})
    })

})

module.exports=router;