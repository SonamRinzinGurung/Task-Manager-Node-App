const asyncWrapper = require("../middleware/async");
const User = require("../models/Users");
const { createCustomError } = require("../errors/custom-error");

const register = asyncWrapper(async (req, res) => {
  const user = await User.create(req.body);
  const token = user.createJWT();

  res.status(201).json({ user, token });
});

const login = asyncWrapper(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next(createCustomError(`Please enter email and password`, 400));
  }
  const user = await User.findOne({ username });
  if (!user) {
    return next(
      createCustomError(`No user found with user name : ${username}`, 401)
    );
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    return next(createCustomError(`Invalid Credential`, 401));
  }
  const token = user.createJWT();
  res.status(200).json({ user: { name: user.name }, token });
});
module.exports = {
  register,
  login,
};
