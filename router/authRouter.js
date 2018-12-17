const { Router } = require('express');

const authRouter = Router();

authRouter.get('/logout', (req, res) => {
  if (req.logout) {
    req.logout();
    req.session = null;
    res.redirect('back');
  }
});

module.exports = authRouter;
