const db = require("../config")

class Users {
  // Retrieve all users
  fetchUsers(req, res) {
    const query = `
      SELECT userID, firstName, lastName, userAge, Gender, emailAdd, userProfile
      FROM Users
    `;
    db.query(query, (err, results) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  // Retrieve a single user by ID
  fetchUser(req, res) {
    const query = `
      SELECT userID, firstName, lastName, userAge, Gender, emailAdd, userProfile
      FROM Users
      WHERE userID = ?;
    `;
    db.query(query, [req.params.id], (err, result) => {
      if (err) throw err;
      if (result.length === 0) {
        res.status(404).json({
          status: 404,
          msg: 'User not found.',
        });
      } else {
        res.json({
          status: res.statusCode,
          result: result[0],
        });
      }
    });
  }

  // Update a user
  updateUser(req, res) {
    const query = `
      UPDATE Users
      SET ?
      WHERE userID = ?;
    `;
    db.query(query, [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'The user record was updated.',
      });
    });
  }

  // Delete a user by ID
  deleteUser(req, res) {
    const query = `
      DELETE FROM Users
      WHERE userID = ?;
    `;
    db.query(query, [req.params.id], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: 'A user record was deleted.',
      });
    });
  }
}

module.exports = Users;