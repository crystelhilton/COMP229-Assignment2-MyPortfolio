import express from 'express'
import contactCtrl from '../controllers/contact.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

// POST is public so the Contact form on the frontend can submit
router
  .route('/api/contacts')
  .get(contactCtrl.list)
  .post(contactCtrl.create)
  .delete(authCtrl.requireSignin, contactCtrl.removeAll)

router
  .route('/api/contacts/:contactId')
  .get(contactCtrl.read)
  .put(authCtrl.requireSignin, contactCtrl.update)
  .delete(authCtrl.requireSignin, contactCtrl.remove)

router.param('contactId', contactCtrl.contactByID)

export default router
