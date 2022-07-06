require("dotenv").config();
const Router = require("router");
const router = Router();
const bcrypt = require("bcrypt");
const User = require("../../Model/singupschema");

router.get("/", (req, res) => {
  res.status(200).json({ msg: "This is login page." });
});

router.post("/", async (req, res) => {
  if (!(req.body.email && req.body.password)) {
    return res.status(500).json({ err: "All fields are required" });
  }
  const email = req.body.email;
  const password = req.body.password;

  const data = await User.findOne({ email: email });
  if (!data) {
    return res.status(500).json({ msg: "User not found." });
  }

  const auth = await bcrypt.compareSync(req.body.password, data.password);
  if (auth) {
    data.password = "";
    return res.status(200).send(data);
  }
   else {
    return res.status(500).json({ err: "Password didnot match." });
  }
});

module.exports = router;
