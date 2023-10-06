const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");

router.post("/reg", async (req, res) => {
  try {
    const { name, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      password: hashPassword,
      score: 100,
    });
    req.session.userId = newUser.id;
    res.status(200).json({ message: "ok", user: newUser });
  } catch (error) {
    res.json({ messageError: error.message });
  }
});
module.exports = router;
