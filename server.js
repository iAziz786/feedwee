const http = require('http');

const app = require('./app');

const server = http.createServer(app);

server.listen(app.get('port'), () => {
  console.log(`App is running on port http://localhost:${app.get('port')}`);
});
