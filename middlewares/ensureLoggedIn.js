function ensureLoggedIn(req, res, next) {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next()
  }
  return res.status(403).json({ loggedIn: false, user: null })
}

module.exports = ensureLoggedIn
