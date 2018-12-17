const { Router } = require('express');

const ensureLoggedIn = require('../middlewares/ensureLoggedIn');
const createTweet = require('../middlewares/api/createTweet');
const getTweetsOfUser = require('../middlewares/api/getTweetsOfUser');

const apiRouter = Router();

apiRouter.use(ensureLoggedIn);
apiRouter.post('/tweet/new', createTweet);
apiRouter.get('/tweets', getTweetsOfUser);

module.exports = apiRouter;
