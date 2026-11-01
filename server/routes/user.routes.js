import express from 'express'
import userCtrl from '../controllers/user.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

router
  .route('/api/users')
  .get(userCtrl.list)
  .post(userCtrl.create) // sign up is public
  .delete(authCtrl.requireSignin, userCtrl.removeAll)

// Protected: must be signed in AND be the owner of the profile to change it
router
  .route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)

router.param('userId', userCtrl.userByID)

export default router
