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

    // Register

    async register(req, res) {
        const data = req.body;
        //encrypt password
        data.userPass = await hash(data.userPass, 15);
        //PAYLOAD means DATA THAT COMES FROM THE USER
        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass,
        };
        //query
        const query = `
      INSERT INTO Users
      SET ?;
      `;
        db.query(query, [data], (err) => {
            if (err) throw err;
            //create a token
            let token = createToken(user);
            res.json({
                status: res.statusCode,
                msg: "You are now registered.",
            });
        });
    }

    login(req, res) {
        const { emailAdd, userPass } = req.body;
        // Use parameterized query
        const query = `
        SELECT userID, firstName, lastNmae,userAge, gender,userRole,
        emailAdd, profileUrl
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `;
        db.query(query, async (err, result) => {
            if (err) throw err;
            if (!result?.length) {
                res.json({
                    status: res.statusCode,
                    msg: "You provided a wrong email.",
                });
            } else {
                await compare(userPass, result[0].userPass, (cErr, cResult) => {
                    if (cErr) throw cErr;
                    // Create a token
                    const token = createToken({
                        emailAdd,
                        userPass,
                    });
                    if (cResult) {
                        res.json({
                            msg: "Logged in",
                            token,
                            result: result[0],
                        });
                    } else {
                        res.json({
                            status: res.statusCode,
                            msg: "Invalid password or you have not registered",
                        });
                    }
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