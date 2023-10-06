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

router.get("/wer", async (req, res) => {
  try {
    const { userId } = req.session;
    if (userId) {
      const user = await User.findOne({
        where: { id: userId },
        attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      });
      res.status(201).json(user);
    } else {
      res.status(403).json({ message: "не ы сети" });
    }
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: "Ошибка при удалении сессии" });
    }

    res.clearCookie("user_sid").json({ message: "ok" });
  });
});

router.post("/aut", async (req, res) => {
  try {
    const { password, name } = req.body;
    // console.log({ password, name });
    if (password && name) {
      const user = await User.findOne({ where: { name } });
      if (user && (await bcrypt.compare(password, user.password))) {
        req.session.userId = user.id;
        res.json({ message: "ok", user });
        console.log({ message: "ok", user });
      } else {
        res.json({ message: "Логин или пароль не совпадают" });
      }
    } else {
      res.json({ message: "Заполните все поля" });
    }
  } catch (error) {
    res.json({ messageError: error.message });
  }
});

module.exports = router;
