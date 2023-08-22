const db = require("../config")
const bcrypt = require("bcrypt");
const { createToken } = require("../middleware/AuthenticateUser");

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

    // Register

    async register(req, res) {
        try {
          const data = req.body;
          
          // Ensure data.userPass is a valid string
          if (typeof data.userPass !== 'string' || data.userPass.length === 0) {
            return res.status(400).json({
              status: 400,
              msg: 'Invalid password.',
            });
          }
    
          // Generate a salt
          const saltRounds = 15;
          const salt = await bcrypt.genSalt(saltRounds);
    
          // Encrypt the password using the generated salt
          const hashedPassword = await bcrypt.hash(data.userPass, salt);
    
          // Create a user object with email and hashed password
          const user = {
            emailAdd: data.emailAdd,
            userPass: hashedPassword,
          };
    
          // Insert the user data into the database
          const query = `
            INSERT INTO Users
            SET ?;
          `;
          db.query(query, user, (err) => {
            if (err) {
              console.error(err);
              res.status(500).json({
                status: 500,
                msg: "Registration failed.",
              });
            } else {
              // Create a token for the registered user
              const token = createToken(user);
    
              res.status(201).json({
                status: 201,
                msg: "You are now registered.",
                token: token,
              });
            }
          });
        } catch (err) {
          console.error(err);
          res.status(500).json({
            status: 500,
            msg: "Registration failed.",
          });
        }
      }
    

    async login(req, res) {
        try {
            const { emailAdd, userPass } = req.body;

            // Query the database to get the user's hashed password
            const query = `
            SELECT userID, emailAdd, userPass
            FROM Users
            WHERE emailAdd = ?;
          `;
            db.query(query, [emailAdd], async (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({
                        status: 500,
                        msg: "Login failed.",
                    });
                }

                if (!result?.length) {
                    return res.status(401).json({
                        status: 401,
                        msg: "Invalid email or password.",
                    });
                }

                const hashedPassword = result[0].userPass;

                // Compare the provided password with the hashed password from the database
                const passwordMatch = await bcrypt.compare(userPass, hashedPassword);

                if (!passwordMatch) {
                    return res.status(401).json({
                        status: 401,
                        msg: "Invalid email or password.",
                    });
                }

                // Create a token for the authenticated user
                const user = {
                    emailAdd,
                };
                const token = createToken(user);

                res.status(200).json({
                    status: 200,
                    msg: "Logged in",
                    token: token,
                    result: result[0],
                });
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                status: 500,
                msg: "Login failed.",
            });
        }
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