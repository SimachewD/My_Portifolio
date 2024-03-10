
const express = require('express')

const {
        patchAdmin,
        patchProfile,
        patchAbout,
        postMessage, 
        createAdmin} = require('../controllers/userController')

const router = express.Router()

// router.patch( '/createadmin', createAdmin)

router.patch( '/updateadmin', patchAdmin)

router.patch( '/updateprofile', patchProfile)

router.patch( '/updateabout', patchAbout)

router.post( '/postmessage', postMessage)

module.exports = router;
 