const express = require('express')

const Projects = require('../data/helpers/projectModel')

const router = express.Router()

router.post('/', validateProject, (res, res) => {

})

router.get('/', (req, res) => {

})

router.get('/:id', validateId, (req, res) => {

})

router.get('/:id/actions', validateId, (req, res) => {

})

router.put('/:id', validateId, validateProject, (req, res) => {

})

router.delete('/:id', validateId, (req, res) => {

})

function validateProject(req, res, next) {

    
}

function validateId(req, res, next) {
    
}

module.exports = router