// Database Config
const db = require("./config");
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require('../api/middleware/AuthenticateUser')
const express = require('express');
const app = express();
const port = +process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});