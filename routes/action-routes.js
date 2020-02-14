const express = require('express')

const Actions = require('../data/helpers/actionModel')

const router = express.Router()

router.post('/', validateAction, (res, res) => {

})

router.get('/', (req, res) => {

})

router.get('/:id', validateId, (req, res) => {

})

router.put('/:id', validateId, validateAction, (req, res) => {

})

router.delete('/:id', validateId, (req, res) => {

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