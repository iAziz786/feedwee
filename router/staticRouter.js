const path = require('path');
const { Router } = require('express');

const staticRouter = Router();

staticRouter.get('/robots.txt', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'robots.txt'));
});

module.exports = staticRouter;
