
const express = require('express')

const {
        getMain,
        postSkill,
        postProject,
        deleteProject,
        deleteSkill } = require('../controllers/mainController')

const router = express.Router()

router.get( '/', getMain)

router.post( '/addskill', postSkill)

router.post( '/addproject', postProject)

router.delete( '/deleteproject', deleteProject)

router.delete( '/deleteskill', deleteSkill)


module.exports = router;
