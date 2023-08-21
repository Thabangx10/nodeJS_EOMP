const db = require('./db'); 

class Orders {
  // Retrieve all orders
  fetchOrders(req, res) {
    const query = `
      SELECT orderID, userID, prodID, orderDate
      FROM Orders
      JOIN Users ON Orders.userID = Users.userID
      JOIN Products ON Orders.prodID = Products.prodID
      WHERE Orders.userID = ?;
    `;
    db.query(query, [req.params.userID], (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  // Retrieve a single order by ID
  fetchOrder(req, res) {
    const query = `
      SELECT orderID, userID, prodID, orderDate
      FROM Orders
      JOIN Users ON Orders.userID = Users.userID
      JOIN Products ON Orders.prodID = Products.prodID
      WHERE orderID = ?;
    `;
    db.query(query, [req.params.id], (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        res.status(404).json({
          status: 404,
          msg: 'Order not found.',
        });
      } else {
        res.json({
          status: res.statusCode,
          result: result[0],
        });
      }
    });
  }

  // Register a new order
  registerOrder(req, res) {
    const order = {
      userID: req.body.userID,
      prodID: req.body.prodID,
      orderDate: new Date(),
    };

    const query = 'INSERT INTO Orders SET ?';
    db.query(query, order, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'A new order was created.',
        orderId: result.insertId,
      });
    });
  }

  // Update an order
  updateOrder(req, res) {
    const order = {
      userID: req.body.userID,
      prodID: req.body.prodID,
      orderDate: req.body.orderDate,
    };

    const query = `UPDATE Orders SET ? WHERE orderID = ${req.params.id}`;
    db.query(query, order, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'The order record was updated.',
      });
    });
  }

  // Delete an order by ID
  deleteOrder(req, res) {
    const query = `DELETE FROM Orders WHERE orderID = ${req.params.id}`;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'An order record was deleted.',
      });
    });
  }
}

module.exports = Orders;
