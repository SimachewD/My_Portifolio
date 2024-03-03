
const express = require('express')

const {
        getMain,
        postSkill,
        postProject,
        patchAdmin,
        patchProfile,
        patchAbout,
        deleteProject,
        deleteSkill } = require('../controllers/mainController')

const router = express.Router()

router.get( '/', getMain)

router.post( '/addskill', postSkill)

router.post( '/addproject', postProject)

router.patch( '/updateadmin', patchAdmin)

router.patch( '/updateprofile', patchProfile)

router.patch( '/updateabout', patchAbout)

router.delete( '/deleteproject', deleteProject)

router.delete( '/deleteskill', deleteSkill)


module.exports = router;
