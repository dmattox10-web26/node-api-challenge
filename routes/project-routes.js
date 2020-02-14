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
    if (req.body) {
        // I've got a jar of dirt!
        if (req.body.name && req.body.description) {
            // savvy?
            next()
        }
        else {
            // Not good.
            res.status(400).json({ message: 'missing one or more required fields' })
        }
    }
    else {
        // Nobody move! I dropped me brain!
        res.status(400).json({ message: 'missing body' })
    }
    
}

function validateId(req, res, next) {
    if(Projects.get(req.params.id)) {
        // savvy?
        next()
    }
    else {
        // Not good.
        res.status(404).json({ message: 'invalid id' })
    }
}

module.exports = router