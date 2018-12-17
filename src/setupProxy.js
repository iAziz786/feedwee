const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  const target = 'http://localhost:4000';
  app.use(proxy('/login', { target }));
  app.use(proxy('/oauth/*', { target }));
  app.use(proxy('/profile', { target }));
  app.use(proxy('/logout', { target }));
  app.use(proxy('/api/*', { target }));
};
