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

module.exports = router;
