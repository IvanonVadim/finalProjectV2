const router = require('express').Router();
const { Theme, Question } = require('../../db/models');

router.get('/car', async (req, res) => {
  try {
    const themes = await Theme.findAll({
      include: { model: Question },
    });
    console.log(themes);
    res.status(200).json({ message: 'ok', themes });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
