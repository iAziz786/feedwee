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
      type: String
    },
    email: {
      type: emailSchema,
      required: true
    },
    dob: {
      type: Date
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
