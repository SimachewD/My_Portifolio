
const express = require('express')

const {
        changePassword,
        patchProfile,
        patchAbout,
        postMessage, 
        createAdmin} = require('../controllers/userController')

const router = express.Router()

// router.post( '/createadmin', createAdmin)

router.patch( '/admin/changepassword', changePassword)

router.patch( '/admin/updateprofile', patchProfile)
 
router.patch( '/admin/updateabout', patchAbout)

router.post( '/admin/postmessage', postMessage)

module.exports = router;
 