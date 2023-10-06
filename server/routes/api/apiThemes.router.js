const router = require("express").Router();
const { Theme, Question, User } = require("../../db/models");

router.get("/car", async (req, res) => {
  try {
    const themes = await Theme.findAll({
      include: { model: Question },
    });
    console.log(themes);
    res.status(200).json({ message: "ok", themes });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { answer, id } = req.body;
    const quest = await Question.findOne({ where: { id } });
    const user = await User.findOne({ where: { id: req.session.userId } });
    if (answer === quest.answer) {
      user.score += quest.price;
      user.save();
      res.json({ message: "правильно", user });
    } else {
      user.score -= quest.price;
      user.save();
      res.json({ message: "тупик", user });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
