const { check, validationResult } = require("express-validator");
StudentSignValidator = [
  check("Name").not().isEmpty().withMessage("Name cannot be empty"),
  check("EmailId").isEmail().withMessage("Not a valid email id"),
  check("MobileNo")
    .not()
    .isEmpty()
    .isNumeric()
    .withMessage("enter a valid Mobile no"),
  check("Password")
    .not()
    .isEmpty()
    .isLength({ min: 8, max: 16 })
    .withMessage(
      "Password should not be greater than 16 character and less than 8 character"
    ),
  check("HouseNo").not().isEmpty().withMessage("HouseNo cannot be empty"),
  check("Street").not().isEmpty().withMessage("Street cannot be empty"),
  check("State").not().isEmpty().withMessage("State cannot be empty"),
  check("Pincode")
    .not()
    .isEmpty()
    .isNumeric()
    .withMessage("enter a valid pincode"),
  (request, respond, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
      return respond.status(422).json({
        response: false,
        errors: errors.array().map((items) => {
          const { msg } = items;
          return msg;
        }),
      });
    next();
  },
];
TeacherSignValidator = [
  check("Name")
    .not()
    .isEmpty()
    .withMessage("Tution center name cannot be empty"),
  check("Password")
    .not()
    .isEmpty()
    .isLength({ min: 8, max: 16 })
    .withMessage(
      "Password should not be greater than 16 character and less than 8 character"
    ),
  check("Pincode")
    .not()
    .isEmpty()
    .isNumeric()
    .withMessage("enter a valid pincode"),
  check("ContactNo")
    .not()
    .isEmpty()
    .isNumeric()
    .withMessage("enter a valid Mobile no"),
  (request, respond, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
      return respond.status(422).json({
        response: false,
        errors: errors.array().map((items) => {
          const { msg } = items;
          return msg;
        }),
      });
    next();
  },
];
StudentLoginValidator = [
  check("EmailId")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("enter a valid emaid id"),
  check("Password")
    .not()
    .isEmpty()
    .isLength({ min: 8, max: 16 })
    .withMessage(
      "Password should not be greater than 16 character and less than 8 character"
    ),
  (request, respond, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
      return respond.status(422).json({
        response: false,
        errors: errors.array().map((items) => {
          const { msg } = items;
          return msg;
        }),
      });
    next();
  },
];
TeacherLoginValidator = [
  check("Name").not().isEmpty().withMessage("Name canot br empty"),
  check("Password")
    .not()
    .isEmpty()
    .isLength({ min: 8, max: 16 })
    .withMessage(
      "Password should not be greater than 16 character and less than 8 character"
    ),
  (request, respond, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
      return respond.status(422).json({
        response: false,
        errors: errors.array().map((items) => {
          const { msg } = items;
          return msg;
        }),
      });
    next();
  },
];
module.exports = {
  StudentSignValidator,
  TeacherSignValidator,
  StudentLoginValidator,
  TeacherLoginValidator,
};
