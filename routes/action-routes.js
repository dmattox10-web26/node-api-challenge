const express = require('express')

const Actions = require('../data/helpers/actionModel')

const router = express.Router()

router.post('/', validateAction, (res, res) => {
    Actions.insert(req.body)
    .then(action => {
        res.status(201).json(action)
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

router.get('/', (req, res) => {
    Actions.get()
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

router.get('/:id', validateId, (req, res) => {
    Actions.get(req.params.id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })

})

router.put('/:id', validateId, validateAction, (req, res) => {
    Actions.update(req.params.id, req.body)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

router.delete('/:id', validateId, (req, res) => {
    Actions.remove(req.params.id)
    .then(removed => {
        res.status(200).json(removed)
    })
    .catch(err => {
        res.status(500).json({ error: err })
    })
})

function validateAction(req, res, next) {
    if (req.body) {
     // I've got a jar of dirt!
        if (req.body.description && req.body.notes && req.body.project_id) {
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
    if(Actions.get(req.params.id)) {
        //savvy?
        next()
    }
    else {
        // Not good.
        res.status(404).json({ message: 'invalid id' })
    }
}

module.exports = router