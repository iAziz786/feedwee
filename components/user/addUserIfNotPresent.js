function addUserIfNotPresent(data) {
  return new Promise(async (resolve, reject) => {
    const User = this;

    const {
      email: { value: email }
    } = data;

    let user = await User.findByEmail(email);

    if (!user) {
      user = await User.create(data);
    }
    return resolve(user);
  });
}

module.exports = addUserIfNotPresent;
