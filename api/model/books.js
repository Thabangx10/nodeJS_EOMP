//Books
class Books{
    // Many Users \\
    fetchbooks(req, res) {
        const query = `
        SELECT bookID, bookTitle, category, bookUrl
        FROM Books;`
        db.query(query, (err, results) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    // Single User \\
    fetchbook(req, res) {
        const query = `
        SELECT bookID, booksTitle, category, bookUrl
        FROM Books
        WHERE bookID = ${req.params.id};`
        db.query(query, (err, result) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
    /// Update \\\
    updateBook(req, res) {
        const query = `
        UPDATE FROM Books
        SET ?
        WHERE booksID = ?;`
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "The book record was updated."
            })
        })
    }
    /// DELETE \\\
    deleteBook(req, res) {
        const query = `
        DELETE FROM Books
        WHERE bookID = ${req.params.id};`
        db.query(query, (err) => {
            if (err) throw err
            res.json({
                status: res.statusCode,
                msg: "A book was deleted"
            })
        })
    }
}
module.exports = Books