const express = require('express')
const bodyParser = require('body-parser')
const db = require("./data/queries");
const app = express()
const port = 8080


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

//post routes
app.get('/posts', db.getPosts)
app.get('/posts/:id', db.getPostById)
app.post('/posts', db.createPost)
app.delete('/posts/:id', db.deletePost)

//user routes
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.delete('/users/:id',db.deleteUser)