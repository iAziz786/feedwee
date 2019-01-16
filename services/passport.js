const passport = require('passport');
const OpenIdConnect = require('passport-openidconnect').Strategy;
const { User } = require('../components/user/modal');

passport.use(
  new OpenIdConnect(
    {
      issuer: `${process.env.OAUTH_SERVER}`,
      authorizationURL: `${process.env.OAUTH_SERVER}/oauth/authorize`,
      tokenURL: `${process.env.OAUTH_SERVER}/oauth/token`,
      userInfoURL: `${process.env.OAUTH_SERVER}/oauth/userinfo`,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:4000/authorization-code/callback',
      scope: 'profile'
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
      const { name, email, email_verified, birhday } = jwtClaims;
      let { preferred_username } = jwtClaims;
      if (!preferred_username) {
        preferred_username = `${email.split('@')[0]}-${Date.now()}`;
      }
      try {
        const user = await User.addUserIfNotPresent({
          name,
          birhday,
          username: preferred_username,
          email: { value: email, verified: !!email_verified }
        });
        return done(null, user.toJSON());
      } catch (err) {
        throw err;
      }
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
