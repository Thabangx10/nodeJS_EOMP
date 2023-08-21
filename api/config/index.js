require("dotenv").config()

const {createPool} = require("mysql")

const connection = createPool ({
    host: process.env.dbHost,
    database: process.env.dbName,
    user:process.env.dbUsr,
    password: process.env.dbPwd,
    multipleStatements: true,
    connectionlimit: 30
})


module.exports = connection