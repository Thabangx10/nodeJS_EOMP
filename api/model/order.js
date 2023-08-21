// orders
class Orders {
    // = ORDERS = \\
    fetchOrders(req, res) {
        const query = `
        SELECT orderID, userID, bookID, orderDate
        FROM Orders
        JOIN users ON orders.userID = users.id
        JOIN books ON orders.booksID = books.id
        WHERE orders.userID = ?;`
        db.query(query, [userID], async (err, results) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
    // == SINGLE ORDER == \\
    fetchOrder(req, res) {
        const query = `
        SELECT orderID, userID, bookID, orderDate
        FROM orders
        JOIN users ON orders.userID = user.id
        JOIN books ON orders.bookID = books.id
        WHERE orderID = ${req.params.id};`
        db.query(query, (req, result) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    // === REGISTER ORDER === \\
    async registerOrder(req, res) {
    }
    // UPDATE \\
    updateOrders(req, res) {
        const query = `
        UPDATE FROM Orders
        SET ?
        WHERE orderID = ?;
        `
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "An order record was updated.",
            })
        })
    }
    //DELETE\\
    deleteOrder(req, res) {
        const query = `
        DELETE FROM Orders
        WHERE orderID = ${req.params.id};`
        db.query(query, (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "An order record was deleted."
            })
        })
    }
}
module.exports = Orders