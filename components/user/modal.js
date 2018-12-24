const { Schema } = require('mongoose');
const { twitterDBConnection } = require('../../config/mongodb.config');

const emailSchema = new Schema(
  {
    value: {
      type: String
    },
    verified: {
      type: Boolean
    }
  },
  { _id: false }
);

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: emailSchema,
      required: true
    },
    birthday: {
      type: Date
    },

    username: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

userSchema.statics.findByEmail = require('./findByEmail');
userSchema.statics.addUserIfNotPresent = require('./addUserIfNotPresent');

const User = twitterDBConnection.model('User', userSchema);

module.exports = {
  User
};
