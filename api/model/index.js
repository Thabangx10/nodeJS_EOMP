const Users = require('./user')
const Orders = require('./order')
const Products = require('./product')
// Export all objects
module.exports = {
    users: new Users(),
    products: new Products(),
    orders: new Orders()
}
