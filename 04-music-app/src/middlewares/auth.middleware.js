const jwt = require("jsonwebtoken");

async function authArtist(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    /* check for role based access */
    if (decoded.role !== "artist") {
      return res.status(403).json({
        message: "You don't have access to create an music",
      });
    }

    req.user = decoded;

    next();
  } catch (err) {
    console.log(err);

    return res.status(401).json({
      message: "Invalid token",
    });
  }
}

async function authUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    if (!decoded.role) {
      return res.status(403).json({
        message: "You don't have permission to access this",
      });
    }

    req.user = decoded;

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Invalid token",
    });
  }
}

module.exports = { authArtist, authUser };
