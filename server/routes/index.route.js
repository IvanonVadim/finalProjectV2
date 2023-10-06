const router = require('express').Router();
const apiThemesRouter = require('./api/apiThemes.router');

router.use('/api/themes', apiThemesRouter);

module.exports = router;
