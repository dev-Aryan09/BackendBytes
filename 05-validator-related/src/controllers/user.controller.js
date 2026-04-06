function registerUser(req, res) {
  const { username, email, password } = req.body;

  res.status(201).json({
    message: "user created successfully",
    user: {
      username,
      email,
      password,
    },
  });
}

module.exports = { registerUser };
