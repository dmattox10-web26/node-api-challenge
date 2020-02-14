const express = require('express')

const Projects = require('../data/helpers/projectModel')

const router = express.Router()

router.post('/', validateProject, (res, res) => {
    Projects.insert(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

router.get('/', (req, res) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

router.get('/:id', validateId, (req, res) => {
    Projects.get(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

router.get('/:id/actions', validateId, (req, res) => {
    Projects.getProjectActions(req.params.id)
    .then(actions => {
        res.status(200).json(actions)
    }) 
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

router.put('/:id', validateId, validateProject, (req, res) => {
    Projects.update(req.params.id, req.body)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

router.delete('/:id', validateId, (req, res) => {
    Projects.remove(req.params.id)
    .then(removed => {
        res.status(200).json(removed)
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
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