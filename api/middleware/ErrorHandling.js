// error handling middleware
function errorHandling(err, req, res, next) {
    if (err) {
        let status = err.status || 500;
        res.status(status).json({
            status,
            msg: "An error occurred: please try again later",
        });
    } else {
        // If there's no error, continue to the next middleware
        next();
    }
}

module.exports = errorHandling;