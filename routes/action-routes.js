const express = require('express')

const Actions = require('../data/helpers/actionModel')

const router = express.Router()

router.post('/', validateAction, (res, res) => {

})

router.get('/', (req, res) => {

})

router.get('/:id', validateId, (req, res) => {

})

router.put('/:id', validateId, (req, res) => {

})

router.delete('/:id', validateId, (req, res) => {

})

function validateAction(req, res, next) {

    
}

function validateId(req, res, next) {

}

module.exports = router