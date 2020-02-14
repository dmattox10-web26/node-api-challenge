const express = require('express')
const actionRouter = require('./routes/action-routes')
const projectRouter = require('./routes/project-routes')

const server = express()

server.use(helmet)
server.use(express.json())

server.get('/', (req, res) => {
    res.send(`<h2>“The code is more what you’d call ‘guidelines’ than actual rules.” – Hector Barbossa</h2>`)
})

server.use('/api/actions', actionRouter)
server.use('/api/projects', projectRouter)

module.exports = server