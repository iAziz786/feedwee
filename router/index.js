const path = require('path');
const { Router } = require('express');
const apiRouter = require('./apiRouter');
const authRouter = require('./authRouter');
const oauthRouter = require('./oauthRouter');
const profileRouter = require('./profileRouter');
const staticRouter = require('./staticRouter');

const router = Router();

router.use('/api', apiRouter);
router.use(authRouter);
router.use(oauthRouter);
router.use(profileRouter);
router.use(staticRouter);
router.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

module.exports = router;
