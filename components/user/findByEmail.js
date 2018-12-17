async function findByEmail(email) {
  const User = this;
  const user = await User.findOne({ 'email.value': email });
  return user;
}

module.exports = findByEmail;
