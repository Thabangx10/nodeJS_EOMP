class Products {
  // Create a new product
  createProduct(req, res) {
    const product = {
      prodName: req.body.prodName,
      quantity: req.body.quantity,
      amount: req.body.amount,
      Category: req.body.Category,
      prodUrl: req.body.prodUrl,
    };

    const query = 'INSERT INTO Products SET ?';
    db.query(query, product, (err, result) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'A new product was created.',
        productId: result.insertId,
      });
    });
  }

  // Retrieve all products
  fetchProducts(req, res) {
    const query = 'SELECT prodID, prodName, quantity, amount, Category, prodUrl FROM Products';
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  // Retrieve a single product by ID
  fetchProduct(req, res) {
    const query = `SELECT prodID, prodName, quantity, amount, Category, prodUrl FROM Products WHERE prodID = ${req.params.id}`;
    db.query(query, (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        res.status(404).json({
          status: 404,
          msg: 'Product not found.',
        });
      } else {
        res.json({
          status: res.statusCode,
          result: result[0],
        });
      }
    });
  }

  // Update a product
  updateProduct(req, res) {
    const product = {
      prodName: req.body.prodName,
      quantity: req.body.quantity,
      amount: req.body.amount,
      Category: req.body.Category,
      prodUrl: req.body.prodUrl,
    };

    const query = `UPDATE Products SET ? WHERE prodID = ${req.params.id}`;
    db.query(query, product, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'The product record was updated.',
      });
    });
  }

  // Delete a product by ID
  deleteProduct(req, res) {
    const query = `DELETE FROM Products WHERE prodID = ${req.params.id}`;
    db.query(query, (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'A product was deleted.',
      });
    });
  }
}

module.exports = Products;
