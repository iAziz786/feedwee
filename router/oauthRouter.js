const { Router } = require('express');
const passport = require('passport');

const oauthRouter = Router();

oauthRouter.get('/oauth/authorize', passport.authenticate('openidconnect'));
oauthRouter.get(
  '/authorization-code/callback',
  passport.authenticate('openidconnect', { successReturnToOrRedirect: true })
);

module.exports = oauthRouter;
