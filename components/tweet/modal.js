const {
  Schema,
  Types: { ObjectId }
} = require('mongoose');
const { twitterDBConnection } = require('../../config/mongodb.config');

const tweetSchema = new Schema(
  {
    body: {
      type: String,
      maxlength: 280,
      required: true
    },
    creator: {
      type: ObjectId,
      ref: 'User',
      required: true
    },
    likes: {
      type: Number
    },
    parent: {
      type: Object,
      ref: 'Tweet'
    }
  },
  { timestamps: true }
);

const Tweet = twitterDBConnection.model('Tweet', tweetSchema);

module.exports = {
  Tweet
};
