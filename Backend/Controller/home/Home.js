const Router=require('router')
const router=Router()
const Home=require('../../recruter/model/createJobmodel')



router.get('/',async(req,res)=>{
    const home=await Home.find({})
    // home[0]._id="";
    // home[0].recid="";
    res.json({data:home})
})

module.exports=router
