import User from '../models/user.model.js'
import extend from 'lodash/extend.js'
import errorHandler from '../helpers/dbErrorHandler.js'

const SAFE_FIELDS = 'name email updated created'

// POST /api/users  (sign up)
const create = async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    return res.status(200).json({ message: 'Successfully signed up!' })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// GET /api/users
const list = async (req, res) => {
  try {
    const users = await User.find().select(SAFE_FIELDS)
    res.json(users)
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

const userByID = async (req, res, next, id) => {
  try {
    const user = await User.findById(id)
    if (!user) return res.status(404).json({ error: 'User not found' })
    req.profile = user
    next()
  } catch (err) {
    return res.status(400).json({ error: 'Could not retrieve user' })
  }
}

// GET /api/users/:userId
const read = (req, res) => {
  req.profile.hashed_password = undefined
  req.profile.salt = undefined
  return res.json(req.profile)
}

// PUT /api/users/:userId
const update = async (req, res) => {
  try {
    let user = req.profile
    user = extend(user, req.body)
    user.updated = Date.now()
    await user.save()
    user.hashed_password = undefined
    user.salt = undefined
    res.json(user)
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// DELETE /api/users/:userId
const remove = async (req, res) => {
  try {
    const user = req.profile
    await user.deleteOne()
    user.hashed_password = undefined
    user.salt = undefined
    res.json({ message: 'User deleted', user })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

// DELETE /api/users
const removeAll = async (req, res) => {
  try {
    const result = await User.deleteMany({})
    res.json({ message: `${result.deletedCount} user(s) deleted` })
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) })
  }
}

export default { create, list, userByID, read, update, remove, removeAll }
