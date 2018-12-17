const passport = require('passport');
const OpenIdConnect = require('passport-openidconnect').Strategy;
const { User } = require('../components/user/modal');

const okta = {
  issuer: 'https://dev-396519.oktapreview.com/oauth2/default',
  authorizationURL:
    'https://dev-396519.oktapreview.com/oauth2/default/v1/authorize',
  tokenURL: 'https://dev-396519.oktapreview.com/oauth2/default/v1/token',
  userInfoURL: 'https://dev-396519.oktapreview.com/oauth2/default/v1/userinfo',
  clientID: process.env.OKTA_CLIENT,
  clientSecret: process.env.OKTA_SECRET,
  callbackURL: 'http://localhost:4000/authorization-code/callback',
  scope: 'profile'
};

passport.use(
  new OpenIdConnect(
    {
      issuer: `${process.env.OAUTH_SERVER}`,
      authorizationURL: `${process.env.OAUTH_SERVER}/oauth/authorize`,
      tokenURL: `${process.env.OAUTH_SERVER}/oauth/token`,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:4000/authorization-code/callback',
      scope: 'profile',
      skipUserProfile: true
    },
    // okta,
    async (
      iss,
      sub,
      profile,
      jwtClaims,
      accessToken,
      refreshToken,
      params,
      done
    ) => {
      const { name, email, email_verified, dob } = jwtClaims;
      const user = await User.addUserIfNotPresent({
        name,
        dob,
        email: { value: email, verified: !!email_verified }
      });
      return done(null, user.toJSON());
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(userId, done) {
  User.findById(userId).then(user => {
    if (user) {
      return done(null, user);
    }
    done(null, false);
  });
});
