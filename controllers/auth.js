const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const User = require('../models/User')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function(req, res) {
  const candidate = await User.findOne({email: req.body.email})

  if(candidate){
    // check password
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if (passwordResult){
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 60*60})

      res.status(200).json({
        token: `Bearer ${token}`
      })
    } else {
      res.status(401).json({
        message: 'Passwords do not match'
      })
    }
  } else {
    res.status(404).json({
      message: 'User not found'
    })
  }
}

module.exports.register = async function(req, res) {
  const candidate = await User.findOne({email:req.body.email})

  if(candidate){
    // users exist, need to send error
    res.status(409).json({
      message: 'This email is already taken. Try another'
    })
  } else {
    // need create users
    const salt = bcrypt.genSaltSync(10)
    const password = req.body.password
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password,salt)
    })

    try {
      await user.save()
      res.status(201).json(user)
    } catch(e) {
      errorHandler(res, e)
    }
  }

}

// module.export.checkAuth = async function(req, res) {
//   const checkToken = User.findOne()
// }
