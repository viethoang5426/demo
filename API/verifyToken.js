const jwt = require("jsonwebtoken");

const verifyTOKEN = async (req, res,next) => {
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(404).json({ message: "Không tìm thất Token !" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SERECT);
    req.email = decoded.email;
    req.user = decoded.user;
    req.id = decoded.id;
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token!",
      error: error.message,
    });
  }
  next()
};

module.exports = verifyTOKEN;
