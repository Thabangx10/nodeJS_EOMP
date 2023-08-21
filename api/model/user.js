const db = require("../config")

class Users {
    fetchUsers(req, res) {
        const query = `
        SELECT userID, firstName, lastName, userDOB, emailAdd, profileUrl
        FROM Users
        `
        db.query(query, (err, results) =>{
            if(err) throw err
            res.json({
                status: res.statuscode,
                results
            })
        })
    }

    fetchUser(req, res) {
        const query = `
        SELECT userID, firstName, lastName, userDOB, emailAdd, profileUrl
        FROM Users
        WHERE userID = ?;
        `
        db.query(query, (err, result) =>{
            if(err) throw err
            res.json({
                status: res.statuscode,
                result
            })
        })
    }

    login(req, res) {
        const query = ` 
        `
    }

    updateUser(req, res) {
        const query = `
        UPDATE Users
        SET = ?
        WHERE userID = ?
        `

        db.query(query, [req.body, req.param.id], (err) =>{
            if (err) throw err
            res.json({
                status: res.statuscode,
                msg: "Updated user"
            })
        })
    }

    deleteUser(req, res) {
        const query = `
        DELETE 
        FROM Users
        SET = ?
        WHERE userID = ${req.param.id}
        `

        db.query(query, (err) =>{
            if (err) throw err
            res.json({
                status: res.statuscode,
                msg: "Updated user"
            })
        })
    }
} 