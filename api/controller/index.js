const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router();

// Import your model's objects
const { users, products } = require('../model');

// Import your authentication middleware
const { verifyAToken } = require('../middleware/AuthenticateUser');

// === Users Router ===

routes.get('/users', (req, res) => {
  users.fetchUsers(req, res);
});

routes.get('/user/:id', (req, res) => {
  users.fetchUser(req, res);
});

routes.put('/user/:id', bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});

routes.patch('/user/:id', bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});

routes.delete('/user/:id', (req, res) => {
  users.deleteUser(req, res);
});

// === Products Router ===

routes.get('/products', verifyAToken, (req, res) => {
  products.fetchProducts(req, res);
});

routes.post('/addproduct', bodyParser.json(), (req, res) => {
  products.addProduct(req, res);
});

module.exports = {
  express,
  routes,
};
