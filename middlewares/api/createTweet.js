const { Tweet } = require('../../components/tweet/modal');

async function createTweet(req, res) {
  const { tweetBody } = req.body;
  const { _id: creator } = req.user;
  try {
    const tweet = await Tweet.create({ body: tweetBody, creator });
    return res.status(201).json({ success: true, tweet });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
}

module.exports = createTweet;
