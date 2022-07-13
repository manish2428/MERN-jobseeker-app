const Profile = require("../../Model/profilemodel");
const Router = require("router");
const router = Router();

router.get("/", (req, res) => {
  res.send("THIS IS PROFILE PAGE.");
});

// This is a post route for the profile where we post all the required fields
router.post("/", async (req, res) => {
  //   const {} = req.body;
  const profile = new Profile(req.body);
  await profile
    .save()
    .then(() => {
      res.status(200).json({ msg: "Data saved successfully." });
    })
    .catch((e) => {
      res.status(500).json({ error: e });
    });
});

router.delete("/del/:id", async(req, res) => {
    if(!req.params.id){
       return res.status(500).send({errr:"ID should be passed as a parameter"})
    }
  try{
    await Profile.deleteOne({ _id: req.params.id })
    res.status(200).json({msg:"DATA DELETED SUCCESSFULLY"})
  }
  catch{
    res.status(500).json({"err":"NO SUCH USER EXISTS"})
  }
   
});

router.put('/update/:id',async(req,res)=>{
    if(!req.body){
    return res.status(500).json({err:"THERE IS NO FIELDS TO UPDATE."})
}


    var result=await Profile.findOne(
    {_id:req.params.id},
    {$set:req.body})
    .then((result)=>{
        res.status(200).sent(result)
    })
    .catch((e)=>{
        res.status(500).json({error:e})
    })


    })
module.exports = router;
