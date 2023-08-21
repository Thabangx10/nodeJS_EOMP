const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()
const {verifyAToken} = require('../middleware/Authentication')
// Import all model's objects
const {users, books, authors, orders} = require('../model')
// ===User's router ====

routes.get('/users', (req, res) => {
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res) => {
    users.fetchUser(req, res)
})
routes.post('/register', bodyParser.json(), (req, res) => {
    users.register(req, res)
})
routes.put('/user/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
})
routes.patch('/user/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
})
routes.delete('/user/:id', (req, res) => {
    users.deleteUser(req, res)
})
routes.post('/login', bodyParser.json(), (req, res)=>{
    users.login(req, res)
})
// books router
routes.get('/books', verifyAToken, (req, res) =>{
    books.fetchBooks(req, res)
})
routes.post('/addbook', bodyParser.json(), (req, res) =>{
    books.register(req, res)
})
module.exports = {
    express,
    routes
}