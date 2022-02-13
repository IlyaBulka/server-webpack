const express = require('express')
const path = require('path')

const app = express()

const port = 3000

const indexPath = path.resolve(`${__dirname}/../layout`)

app.get('/:file', (req, res) => {
    const file = req.params.file
    res.sendfile(`${indexPath}/html/${file}`)
})

app.get('/css/:file', (req, res) => {
    const file = req.params.file
    res.sendfile(`${indexPath}/css/${file}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})