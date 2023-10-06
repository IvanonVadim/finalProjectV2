const router = require("express").Router();

const apiAuthRouter = require("./api/apiAuth.route");
const apiThemesRouter = require("./api/apiThemes.router");

router.use("/api/auth", apiAuthRouter);
router.use("/api/themes", apiThemesRouter);

module.exports = router;
