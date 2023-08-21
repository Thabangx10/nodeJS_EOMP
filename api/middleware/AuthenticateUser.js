const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();

function createToken(user) {
  return sign(
    {
      emailAdd: user.emailAdd,
      userPass: user.userPass,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );
}

function verifyAToken(req, res, next) {
  try {
    // Retrieve the token from req.headers
    const token = req.headers["authorization"];
    
    // Check if the token exists
    if (!token) {
      return res.status(401).json({
        status: 401,
        msg: "Unauthorized: Token missing",
      });
    }

    // Verify the token
    verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: 401,
          msg: "Unauthorized: Invalid token",
        });
      }
      // If the token is valid, attach the user data to the request for further use
      req.user = decoded;
      next();
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      msg: e.message,
    });
  }
}

module.exports = {
  createToken,
  verifyAToken,
};
