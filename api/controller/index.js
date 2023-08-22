const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router();

// Import your model's objects
const { users, products } = require('../model');

// Import your authentication middleware
// const { verifyAToken } = require('../middleware/AuthenticateUser');

// === Users Router ===

routes.get('/users', (req, res) => {
    users.fetchUsers(req, res);
});

routes.get('/user/:id', (req, res) => {
    users.fetchUser(req, res);
});

// 

// Register

routes.post('/register', bodyParser.json(), (req, res) => {
    users.register(req, res)
})

// Login

routes.post('/login', bodyParser.json(), (req, res) => {
    users.login(req, res)
})
// 

// 

// routes.put('/user/:id', bodyParser.json(), (req, res) => {
//     users.updateUser(req, res);
// });

routes.patch('/user/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res);
});

routes.delete('/user/:id', (req, res) => {
    users.deleteUser(req, res);
});

// === Products Router ===

// Create a new product
routes.post('/products', bodyParser.json(), (req, res) => {
    products.createProduct(req, res);
});

// Retrieve all products
routes.get('/products', (req, res) => {
    products.fetchProducts(req, res);
});

// Retrieve a single product by ID
routes.get('/product/:id', (req, res) => {
    products.fetchProduct(req, res);
});

// Update a product
routes.put('/product/:id', bodyParser.json(), (req, res) => {
    products.updateProduct(req, res);
});

// Delete a product by ID
routes.delete('/product/:id', (req, res) => {
    products.deleteProduct(req, res);
});

module.exports = {
    express,
    routes,
};
