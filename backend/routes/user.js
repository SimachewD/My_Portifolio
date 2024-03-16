
const express = require('express')

const {
        changePassword,
        patchProfile,
        patchAbout,
        postMessage, 
        login} = require('../controllers/userController')

const router = express.Router()

router.post( '/login', login)

router.patch( '/admin/changepassword', changePassword)

router.patch( '/admin/updateprofile', patchProfile)
 
router.patch( '/admin/updateabout', patchAbout)

router.post( '/postmessage', postMessage)

module.exports = router;
 