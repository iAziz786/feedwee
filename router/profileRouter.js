const { Router } = require('express')

const ensureLoggedIn = require('../middlewares/ensureLoggedIn')

const profileRouter = Router()

profileRouter.get('/profile', ensureLoggedIn, (req, res) => {
  res.status(201).json({ loggedIn: true, user: req.user })
})

module.exports = profileRouter
