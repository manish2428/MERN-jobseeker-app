require('dotenv').config()
const Router = require("router");
const router = Router();
const bcrypt=require('bcrypt');

const User = require("../../Model/singupschema");

router.get("/", (req, res) => {
  res.status(200).json({ message: "This is signup page." });
});

router.post("/", async (req, res) => {

  const signup = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      age: req.body.age,
      gender: req.body.gender
  });
   const salt=await bcrypt.genSaltSync(10);
  signup.password= await bcrypt.hash(req.body.password,salt);
 



  await signup
    .save()
    .then(() => {
      res.status(201).json({ message: "Data saved successfully." });
    })
    .catch((error) => {
      res.status(500).json({ Error:error });
    });
});

module.exports = router;
