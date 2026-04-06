const { body, validationResult } = require("express-validator");

/* error handling,
Validation result checker middleware
*/
async function validationRequest(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  next();
}

const registerUserValidationRules = [
  body("username")
    .isString()
    .withMessage("Username must be in the string")
    .isLength({ min: 3, max: 20 })
    .withMessage("username must be between 3 to 20 characters"),

  body("email").isEmail().withMessage("Invalid email address"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 character long"),

  validationRequest,
];

module.exports = { registerUserValidationRules };
