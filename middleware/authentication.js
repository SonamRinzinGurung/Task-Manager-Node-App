const jwt = require("jsonwebtoken");
const { createCustomError } = require("../errors/custom-error");

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return next(createCustomError(`Authentication Invalid`, 401));
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {
      userId: payload.userId,
      name: payload.name,
    };
    next();
  } catch (error) {
    return next(createCustomError(`Authentication Invalid`, 401));
  }
};

module.exports = authenticate;
