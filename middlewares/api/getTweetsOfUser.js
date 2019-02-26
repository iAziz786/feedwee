const { Tweet } = require('../../components/tweet/modal');

async function getTweetsOfUser(req, res) {
  const { _id: userId } = req.user;
  try {
    const tweets = await Tweet.find({
      creator: userId
    })
      .sort({ createdAt: -1 })
      .populate('creator');
    return res.status(200).json({ success: true, tweets });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
}

module.exports = getTweetsOfUser;
